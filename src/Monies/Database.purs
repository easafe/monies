module Monies.Database where

import Prelude

import Data.DateTime (DateTime(..))
import Data.DateTime.Instant as DDI
import Data.List (List)
import Data.List as DL
import Data.Maybe (Maybe(..))
import Data.Maybe as DM
import Data.Newtype as DNT
import Data.Nullable as DN
import Data.Symbol (class IsSymbol)
import Data.Time.Duration (Milliseconds(..))
import Effect (Effect)
import Effect.Exception as EE
import Effect.Uncurried (EffectFn1, EffectFn2)
import Effect.Uncurried as EU
import Effect.Unsafe as UE
import Foreign (Foreign)
import Foreign as F
import Monies.Model (Budget)
import Prim.Row (class Cons, class Lacks)
import Prim.RowList (class RowToList, RowList)
import Prim.RowList as RL
import Record as R
import Type.Proxy (Proxy(..))
import Type.Row.Homogeneous (class Homogeneous)

databaseKey ∷ String
databaseKey = "budgets"

foreign import set ∷ ∀ v. EffectFn2 String v Unit
foreign import get ∷ ∀ v. EffectFn1 String v
foreign import check ∷ EffectFn1 String Boolean

save ∷ ∀ v. Serialize v ⇒ v → Effect Unit
save = EU.runEffectFn2 set databaseKey <<< serialize

load ∷ ∀ v. Deserialize v ⇒ Effect v
load = deserialize <$> EU.runEffectFn1 get databaseKey

exists ∷ Effect Boolean
exists = EU.runEffectFn1 check databaseKey

--we need all this trash to ensure de/serialization is safe

class Serialize v where
      serialize ∷ v → Foreign

instance Serialize v ⇒ Serialize (List v) where
      serialize = F.unsafeToForeign <<< map serialize <<< (DL.toUnfoldable ∷ List v → Array v)

instance
      ( Homogeneous v Foreign
      , RowToList r s
      , SerializeRowList s (Record r) (Record v)
      ) ⇒
      Serialize (Record r) where
      serialize = F.unsafeToForeign <<< serializeRowList @s

class SerializeRowList (list ∷ RowList Type) r result | list r → result where
      serializeRowList ∷ r → result

instance SerializeRowList RL.Nil (Record r) (Record ()) where
      serializeRowList _ = {}

instance
      ( Serialize t
      , SerializeRowList rest (Record u) (Record restV)
      , IsSymbol name
      , Lacks name restV
      , Cons name t z u
      , Cons name Foreign restV v
      ) ⇒
      SerializeRowList (RL.Cons name t rest) (Record u) (Record v) where
      serializeRowList record = R.insert _name (serialize $ R.get _name record) $ serializeRowList @rest record
            where
            _name = Proxy ∷ Proxy name

instance Serialize Int where
      serialize = F.unsafeToForeign

instance Serialize Number where
      serialize = F.unsafeToForeign

instance Serialize String where
      serialize = F.unsafeToForeign

instance Serialize DateTime where
      serialize = F.unsafeToForeign <<< DNT.unwrap <<< DDI.unInstant <<< DDI.fromDateTime

instance Serialize a ⇒ Serialize (Maybe a) where
      serialize = case _ of
            Nothing → F.unsafeToForeign DN.null
            Just a → serialize a

class Deserialize v where
      deserialize ∷ Foreign → v

instance Deserialize v ⇒ Deserialize (List v) where
      deserialize = DL.fromFoldable <<< map deserialize <<< (F.unsafeFromForeign ∷ Foreign → Array Foreign)

instance (RowToList v s , DeserializeRowList s (Record r) (Record v)) ⇒ Deserialize (Record v) where
      deserialize = deserializeRowList @s <<< (F.unsafeFromForeign ∷ Foreign → Record r)

class DeserializeRowList (list ∷ RowList Type) r result | list → r result where
      deserializeRowList ∷ r → result

instance DeserializeRowList RL.Nil (Record r) (Record ()) where
      deserializeRowList _ = {}

instance
      ( DeserializeRowList rest (Record r) (Record restV)

      , IsSymbol name
      , Deserialize t
      , Lacks name restV
      , Cons name Foreign q r
      , Cons name t restV v
      ) ⇒
      DeserializeRowList (RL.Cons name t rest) (Record r) (Record v) where
      deserializeRowList record = R.insert _name (deserialize $ R.get _name record) $ deserializeRowList @rest record
            where
            _name = Proxy ∷ Proxy name

instance Deserialize Int where
      deserialize = F.unsafeFromForeign

instance Deserialize Number where
      deserialize = F.unsafeFromForeign

instance Deserialize String where
      deserialize = F.unsafeFromForeign

instance Deserialize DateTime where
      deserialize = DDI.toDateTime <<< DM.fromMaybe' (\_ -> UE.unsafePerformEffect $ EE.throw "failed to deserialize datetime") <<< DDI.instant <<< Milliseconds <<< (F.unsafeFromForeign ∷ Foreign → Number)

instance Deserialize a ⇒ Deserialize (Maybe a) where
      deserialize = DN.toMaybe <<< F.unsafeFromForeign