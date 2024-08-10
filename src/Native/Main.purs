module Main where

import Prelude

import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Flame.Application.Native as FAN
import Monies.Database as MB
import Monies.Model (init)
import Monies.Update (update)
import Monies.View (view)

main ∷ Effect Unit
main = do
      started ← MB.exists
      model ←
            if started then do
                  budgets ← MB.load
                  pure init { budgets = budgets }
            else
                  pure init
      FAN.mount "monies"
            { init: model /\ []
            , subscribe: []
            , update
            , view
            }