module View (view) where

import Model
import Prelude

import Data.List (List(..))
import Effect.Exception (throw)
import Flame (Html)
import Flame.Native.Attribute as FA
import Flame.Native.Element as FE
import Model as M

foreign import logo_small :: String

view :: Model -> Html Message
view model = FE.div_
      [
            FE.img $ FA.src logo_small,

            case model.budgets of
                  Nil -> newBudgetForm
                  Cons a b -> currentBudgetForm a
      ]

newBudgetForm :: Html Message
newBudgetForm = FE.div_ [
      FE.label (FA.for "max-budget") "Max budget",
      FE.input [FA.id "max-budget", FA.type' "text", FA.onInput (M.setInput maxBudgetInput)],

      FE.label (FA.for "days") "Days",
      FE.input [FA.id "days", FA.type' "text", FA.onInput (M.setInput daysInput) ],

      FE.input [FA.type' "button", FA.value "Start", FA.onClick OpenBudgetPeriod]
]

currentBudgetForm :: Budget -> Html Message
currentBudgetForm a = FE.text "not done yet"