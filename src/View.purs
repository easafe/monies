module View (view) where

import Model
import Prelude

import Data.HashMap (HashMap)
import Data.List (List(..))
import Data.Maybe (Maybe(..))
import Data.Number as DN
import Data.Symbol (class IsSymbol)
import Flame (Html)
import Flame.Native.Attribute as FA
import Flame.Native.Element as FE
import Model as M
import Type.Proxy (Proxy)

foreign import logo_small ∷ String

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
      , FE.input [ FA.id "max-budget", FA.type' "text", FA.keyboardType "numeric", FA.onInput (M.setInput @BudgetRow maxBudgetInput) ]
      , FE.label (FA.for "days") "Days"
      , FE.input [ FA.id "days", FA.keyboardType "numeric", FA.type' "text", FA.onInput (M.setInput @BudgetRow daysInput) ]
      , FE.input [ FA.type' "button", FA.disabled (not (isNumber inputs maxBudgetInput) || not (isNumber inputs daysInput)), FA.value "Start", FA.onClick StartBudget ]
      ]

isNumber ∷ ∀ s. IsSymbol s ⇒ HashMap String String → Proxy s → Boolean
isNumber inputs p = (M.lookupInput p inputs >>= DN.fromString) /= Nothing

currentBudgetForm ∷ HashMap String String -> Budget → Html Message
currentBudgetForm inputs budget = FE.div_ [
                FE.text $ "Max budget: " <> show budget.max,
                FE.text $ "Days: " <> show budget.days,
                FE.text $ "Todays' budget " <> show budget.remaining,
                FE.br,

                FE.label_ "Amount",
                FE.input [ FA.keyboardType "numeric", FA.type' "text", FA.onInput (M.setInput @ExpenseRow amountInput ) ],
                FE.label_ "Tag",
                FE.input [ FA.type' "text", FA.onInput (M.setInput @ExpenseRow tagInput) ],
                FE.input [ FA.type' "button", FA.disabled (not $ isNumber inputs amountInput), FA.value "Add", FA.onClick StartBudget ]

            --     ItemsRepeater(b.Expenses, entry)
]