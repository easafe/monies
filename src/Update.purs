module Update (update) where

import Model

import Data.HashMap as DH
import Data.Tuple.Nested ((/\))

update ∷ Model → Message → _
update model = case _ of
      SetInput field value -> updateInputs field value model /\ []
      StartBudgetPeriod ->
      _ → model /\ []

updateInputs :: String -> String -> Model -> Model
updateInputs field value model = model {
      inputs = DH.insert field value model.inputs
}