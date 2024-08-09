module Main where

import Prelude

import Effect (Effect)
import Flame (AppId(..), QuerySelector(..))
import Flame as FAN
import View (view)
import Update (update)
import Data.Tuple.Nested ((/\))
import Model

main ∷ Effect Unit
main = FAN.mount (QuerySelector "#app") (AppId "monies")
      { init: init /\ []
      , subscribe: []
      , update
      , view
      }