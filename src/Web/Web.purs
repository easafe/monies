module Main where

import Prelude

import Effect (Effect)
import Flame (AppId(..), QuerySelector(..))
import Flame as FAN
import Monies.View (view)
import Monies.Update (update)
import Data.Tuple.Nested ((/\))
import Monies.Model (init)

main ∷ Effect Unit
main = FAN.mount (QuerySelector "#app") (AppId "monies")
      { init: init /\ []
      , subscribe: []
      , update
      , view
      }