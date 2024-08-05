module View (view) where

import Model
import Prelude

import Data.DateTime (DateTime(..))
import Data.DateTime.Instant as DDI
import Data.HashMap (HashMap)
import Data.Int as DI
import Data.List (List(..))
import Data.List as DL
import Data.Maybe (Maybe(..))
import Data.Maybe as DM
import Data.Newtype as DNT
import Data.Number as DN
import Data.Symbol (class IsSymbol)
import Effect.Now as EN
import Effect.Unsafe as EU
import Flame (Html)
import Flame.Native.Attribute as FA
import Flame.Native.Element as FE
import Model as M
import Type.Proxy (Proxy)

foreign import logo_small ∷ String

foreign import formatTime ∷ Number → String
foreign import formatDayOfTheWeek ∷ Number → String
foreign import formatFullDate ∷ Number → String

view ∷ Model → Html Message
view model = FE.div_
      [ FE.img $ FA.src logo_small
      , case model.budgets of
              Nil → newBudgetForm model.inputs
              Cons a _ → currentBudgetForm model.inputs a
      ]

newBudgetForm ∷ HashMap String String → Html Message
newBudgetForm inputs = FE.div_
      [ FE.label (FA.for "max-budget") "Max budget"
      , FE.input [ FA.id "max-budget", FA.type' "text", FA.keyboardType "numeric", FA.onInput (M.setInput @BudgetRow maxBudgetInput), FA.value $ inputValue maxBudgetInput inputs ]
      , FE.label (FA.for "days") "Days"
      , FE.input [ FA.id "days", FA.keyboardType "numeric", FA.type' "text", FA.onInput (M.setInput @BudgetRow daysInput), FA.value $ inputValue daysInput inputs ]
      , FE.input [ FA.type' "button", FA.disabled (not (isNumber inputs maxBudgetInput) || not (isNumber inputs daysInput)), FA.value "Start", FA.onClick StartBudget ]
      ]

isNumber ∷ ∀ s. IsSymbol s ⇒ HashMap String String → Proxy s → Boolean
isNumber inputs p = (M.lookupInput p inputs >>= DN.fromString) /= Nothing

currentBudgetForm ∷ HashMap String String → Budget → Html Message
currentBudgetForm inputs budget = FE.div_
      [ FE.text $ "Max budget: " <> show budget.max
      , FE.text $ "Days: " <> show budget.days
      , FE.text $ "Todays' budget " <> show remaining
      , FE.br
      , FE.label_ "Amount"
      , FE.input [ FA.keyboardType "numeric", FA.type' "text", FA.onInput (M.setInput @ExpenseRow amountInput), FA.value $ inputValue amountInput inputs]
      , FE.label_ "Tag"
      , FE.input [ FA.type' "text", FA.onInput (M.setInput @ExpenseRow tagInput) ]
      , FE.input [ FA.type' "button", FA.disabled (not $ isNumber inputs amountInput), FA.value "Add", FA.onClick Spend ]
      , FE.table_
              ( [ FE.tr_
                        [ FE.td_ "Amount"
                        , FE.td_ "Tag"
                        , FE.td_ "Time"
                        ]
                ] <> DL.toUnfoldable (map listExpenses todaysExpenses)
              )
      ]
      where
      today = EU.unsafePerformEffect EN.nowDate
      isToday (DateTime date _) = date == today
      todaysExpenses = DL.filter (\e -> isToday e.time ) budget.expenses

      remaining = budget.max / DI.toNumber budget.days - DL.foldl (\c e -> c + e.amount) 0.0 todaysExpenses

      showHour dt = formatTime <<< DNT.unwrap <<< DDI.unInstant $ DDI.fromDateTime dt
      listExpenses expense = FE.tr_
            [ FE.td_ $ show expense.amount
            , FE.td_ $ DM.fromMaybe "" expense.tag
            , FE.td_ $ showHour expense.time
            ]

inputValue p inputs = DM.fromMaybe "" $ M.lookupInput p inputs