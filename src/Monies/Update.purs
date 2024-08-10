module Monies.Update (update) where

import Monies.Model
import Prelude

import Data.HashMap as DH
import Data.Int as DI
import Data.List (List(..))
import Data.List as DL
import Data.Maybe (Maybe(..))
import Data.Maybe as DM
import Data.Number as DN
import Data.Tuple.Nested (type (/\), (/\))
import Debug (spy)
import Effect.Aff (Aff)
import Effect.Class as EC
import Effect.Now as EN
import Effect.Unsafe as EU
import Monies.Database as MB
import Monies.Model as M

update ∷ Model → Message → _
update model = case _ of
      SetInput field value → updateInputs field value model /\ []
      StartBudget → saveModel $ startBudget model
      Spend → saveModel $ spend model

updateInputs ∷ String → String → Model → Model
updateInputs field value model = model
      { inputs = DH.insert field value model.inputs
      }

startBudget ∷ Model → Model
startBudget model = model
      { budgets = Cons newBudget model.budgets
      , inputs = DH.empty
      }
      where
      newBudget =
            let
                  m = DM.fromMaybe 0.0 (M.lookupInput maxBudgetInput model.inputs >>= DN.fromString)
                  d = DM.fromMaybe 0 (M.lookupInput daysInput model.inputs >>= DI.fromString)
            in
                  { max: m
                  , days: d
                  , start: EU.unsafePerformEffect (EN.nowDateTime)
                  , expenses: Nil
                  }

spend ∷ Model → Model
spend model = model
      { budgets = case model.budgets of
              Cons budget rest → Cons (addExpense budget) rest
              Nil → model.budgets
      , inputs = DH.empty
      }
      where
      addExpense budget =
            let
                  newExpense =
                        { amount: DM.fromMaybe 0.0 $ (M.lookupInput amountInput model.inputs >>= DN.fromString)
                        , tag: M.lookupInput tagInput model.inputs
                        , time: EU.unsafePerformEffect (EN.nowDateTime)
                        }
            in
                  budget
                        { expenses = Cons newExpense budget.expenses
                        }

saveModel ∷ Model → Model /\ (Array (Aff (Maybe Message)))
saveModel model = model /\ [ EC.liftEffect (MB.save model.budgets) >>= const (pure Nothing) ]