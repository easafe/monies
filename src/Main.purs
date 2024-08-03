module Main where

import Prelude

import Effect (Effect)
import Flame.Application.Native as FAN
import View (view)
import Update (update)
import Data.Tuple.Nested ((/\))
import Model

main ∷ Effect Unit
main = FAN.mount "monies"
      { init: init /\ []
      , subscribe: []
      , update
      , view
      }

