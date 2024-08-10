module Monies.Model where

import Prelude

import Data.DateTime (DateTime)
import Data.DateTime as DT
import Data.HashMap (HashMap)
import Data.HashMap as DH
import Data.HashMap as HM
import Data.List (List(..))
import Data.Maybe (Maybe(..))
import Data.Maybe as DM
import Data.Symbol (class IsSymbol)
import Data.Symbol as DS
import Data.Time.Duration (Days(..))
import Effect.Now as EN
import Effect.Unsafe as EU
import Prim.Row (class Cons)
import Type.Proxy (Proxy(..))

type BudgetRow =
      ( max ∷ Number
      , days ∷ Int
      , start ∷ DateTime
      , expenses ∷ List Expense
      )

type ExpenseRow =
      ( amount ∷ Number
      , tag ∷ Maybe String
      , time ∷ DateTime
      )

maxBudgetInput ∷ Proxy "max"
maxBudgetInput = Proxy

amountInput ∷ Proxy "amount"
amountInput = Proxy

tagInput ∷ Proxy "tag"
tagInput = Proxy

daysInput ∷ Proxy "days"
daysInput = Proxy

--i think we might want to use Variant here instead of those
setInput ∷ ∀ s t r @row. IsSymbol s ⇒ Cons s t r row ⇒ Proxy s → String → Message
setInput p = SetInput (DS.reflectSymbol p)

lookupInput ∷ ∀ s. IsSymbol s ⇒ Proxy s → HashMap String String → Maybe String
lookupInput p = DH.lookup (DS.reflectSymbol p)

data Message
      = StartBudget
      | SetInput String String
      | Spend

type Model =
      { budgets ∷ List Budget
      , inputs ∷ HashMap String String
      }

type Expense = Record ExpenseRow

type Budget = Record BudgetRow

init ∷ Model
init =
      { budgets: Nil
      , inputs: HM.empty
      }
