module Model where

import Data.DateTime (DateTime)
import Data.HashMap (HashMap)
import Data.HashMap as HM
import Data.List (List(..))
import Data.Maybe (Maybe)
import Data.Symbol (class IsSymbol)
import Prim.Row (class Cons)
import Data.Symbol as DS
import Type.Proxy (Proxy(..))

type BudgetRow = ( max ∷ Number
      , days ∷ Int
      , start ∷ DateTime
      , remaining ∷ Number
      , expenses ∷ List Expense
      )

maxBudgetInput :: Proxy "max"
maxBudgetInput = Proxy

daysInput :: Proxy "days"
daysInput = Proxy

setInput :: forall s t r. IsSymbol s => Cons s t r BudgetRow => Proxy s -> String -> Message
setInput p = SetInput (DS.reflectSymbol p)

data Message
      = StartBudgetPeriod
      | SetInput String String
      | Spend

type Model =
      { budgets ∷ List Budget
      , inputs ∷ HashMap String String
      }

type Expense =
      { amount ∷ Number
      , tag ∷ Maybe String
      , time ∷ DateTime
      }

type Budget = Record BudgetRow

init ∷ Model
init =
      { budgets: Nil
      , inputs: HM.empty
      }
