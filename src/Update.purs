module Update (update) where

import Model
import Prelude

import Data.HashMap as DH
import Data.Int as DI
import Data.List (List(..))
import Data.Maybe as DM
import Data.Number as DN
import Data.Tuple.Nested ((/\))
import Effect.Now as EN
import Effect.Unsafe as EU
import Model as M

update ∷ Model → Message → _
update model = case _ of
      SetInput field value → updateInputs field value model /\ []
      StartBudget → startBudget model /\ []
      _ → model /\ []


{-      | Spend ->
            match model.AmountInput with
            | Some a ->
                { model with
                    Budgets = addExpense (a, model.TagInput) model.Budgets |> remaining
                    AmountInput = None
                    TagInput = None },
                Cmd.none
            | None -> model, Cmd.none



              let addExpense (amount, tag) budgets =
        match budgets with
        | [] -> []
        | b :: udgets ->
            { b with
                Expenses =
                    { Amount = amount
                      Tag = tag
                      time = DateTime.Now }
                    :: b.Expenses }
            :: udgets

    let remaining budgets =
        match budgets with
        | [] -> []
        | b :: udgets ->
            let n = (decimal) (DateTime.Now - b.Start).Days + 1m
            let r = List.sumBy (fun e -> e.Amount) b.Expenses

            { b with
                Remaining = b.Max / (decimal) b.Days * n - r }
            :: udgets
-}

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
                  , remaining: m / DI.toNumber d
                  , start: EU.unsafePerformEffect (EN.nowDateTime)
                  , expenses: Nil
                  }