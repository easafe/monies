module Monies.View (view) where

import Monies.Model
import Prelude

import Data.Date as DD
import Data.DateTime (DateTime(..))
import Data.DateTime as DT
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
import Data.Time.Duration (Days(..))
import Debug (spy)
import Effect.Now as EN
import Effect.Unsafe as EU
import Flame (Html)
import Flame.Native.Attribute as FNA
import Monies.Model as M
import Target.Attribute as TA
import Target.Element as TE
import Target.Resource (logoSmall)
import Target.Style as TS
import Type.Proxy (Proxy)

foreign import formatTime ∷ Number → String
foreign import formatDayOfTheWeek ∷ Number → String
foreign import formatFullDate ∷ Number → String

styles ∷ _
styles = TS.create
      { input: { marginBottom: 10, marginTop: 5, borderWidth: 1, borderColor: "gray", borderStyle: "solid", borderRadius: 5, padding: 3 }
      , button: { fontWeight: "bold", textAlign: "center", color: "white", backgroundColor: "#008e4b", borderRadius: 5, padding: 4 }
      , container: { padding: 15 }
      , img: { alignSelf: "center", marginTop: 20 }
      , table: { marginTop: 20 }
      }

view ∷ Model → Html Message
view model = TE.div_
      [ TE.img [ TA.style styles.img, TA.src logoSmall ]
      , case model.budgets of
              Nil → newBudgetForm model.inputs
              Cons a _ → currentBudgetForm model.inputs a
      ]

newBudgetForm ∷ HashMap String String → Html Message
newBudgetForm inputs = TE.div [ TA.style styles.container ]
      [ TE.label (TA.for "max-budget") "Max budget"
      , TE.input [ TA.id "max-budget", TA.style styles.input, TA.type' "text", FNA.keyboardType "numeric", TA.onInput (M.setInput @BudgetRow maxBudgetInput), TA.value $ inputValue maxBudgetInput inputs ]
      , TE.label (TA.for "days") "Days"
      , TE.input [ TA.id "days", TA.style styles.input, FNA.keyboardType "numeric", TA.type' "text", TA.onInput (M.setInput @BudgetRow daysInput), TA.value $ inputValue daysInput inputs ]
      , TE.input [ TA.type' "button", TA.style styles.button, TA.disabled (not (isNumber inputs maxBudgetInput) || not (isNumber inputs daysInput)), TA.value "Start", TA.onClick StartBudget ]
      ]

isNumber ∷ ∀ s. IsSymbol s ⇒ HashMap String String → Proxy s → Boolean
isNumber inputs p = (M.lookupInput p inputs >>= DN.fromString) /= Nothing

currentBudgetForm ∷ HashMap String String → Budget → Html Message
currentBudgetForm inputs budget = TE.div [ TA.style styles.container ]
      [ TE.text $ "Remaining budget: " <> show (budget.max - totalExpenses)
      , TE.text $ "Remaining days: " <> show (budget.days - DI.ceil daysElapsed)
      , TE.text $ "Todays' budget " <> show remaining

      , TE.br

      , TE.label_ "Amount"
      , TE.input [ FNA.keyboardType "numeric", TA.style styles.input, TA.type' "text", TA.onInput (M.setInput @ExpenseRow amountInput), TA.value $ inputValue amountInput inputs ]
      , TE.label_ "Tag"
      , TE.input [ TA.type' "text", TA.style styles.input, TA.onInput (M.setInput @ExpenseRow tagInput), TA.value $ inputValue tagInput inputs ]
      , TE.input [ TA.type' "button", TA.style styles.button, TA.disabled (not $ isNumber inputs amountInput), TA.value "Add", TA.onClick Spend ]

      , TE.table [ TA.style styles.table ]
              ( [ TE.tr_
                        [ TE.td_ "Amount"
                        , TE.td_ "Tag"
                        , TE.td_ "Time"
                        ]
                ] <> DL.toUnfoldable (map listExpenses todaysExpenses)
              )
      ]
      where
      today = EU.unsafePerformEffect EN.nowDate
      daysElapsed = DN.floor $ DNT.unwrap (DD.diff today (DT.date budget.start) ∷ Days)
      isToday (DateTime date _) = date == today
      todaysExpenses = DL.filter (\e → isToday e.time) budget.expenses

      totalExpenses = DL.foldl (\c e → c + e.amount) 0.0 budget.expenses
      --take into account if we have any spill over from previous days
      remaining = budget.max / DI.toNumber budget.days * (daysElapsed + 1.0) - totalExpenses

      showHour dt = formatTime <<< DNT.unwrap <<< DDI.unInstant $ DDI.fromDateTime dt
      listExpenses expense = TE.tr_
            [ TE.td_ $ show expense.amount
            , TE.td_ $ DM.fromMaybe "" expense.tag
            , TE.td_ $ showHour expense.time
            ]

inputValue ∷ ∀ p. IsSymbol p ⇒ Proxy p → HashMap String String → String
inputValue p inputs = DM.fromMaybe "" $ M.lookupInput p inputs