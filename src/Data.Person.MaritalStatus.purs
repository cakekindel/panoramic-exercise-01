module Data.Person.MaritalStatus where

import Prelude

import Data.Argonaut.Decode (class DecodeJson)
import Data.Argonaut.Encode (class EncodeJson)
import Data.Bounded.Generic (genericBottom, genericTop)
import Data.Enum (class BoundedEnum, class Enum)
import Data.Enum.Generic (genericCardinality, genericFromEnum, genericPred, genericSucc, genericToEnum)
import Data.Generic.Rep (class Generic)
import Partial.Unsafe (unsafeCrashWith)
import Prim.TypeError as TypeError

-- | ## Person's Marital Status
-- |
-- | Based on [SPDCI's](https://standards.spdci.org/standards/standards-for-interoperability-interfaces/common-standards-for-interoperability-interfaces/data/code-directory/cd.com.02-marital_status)
-- | enum.
-- | The `U` variant (unmarried, marital history unknown) was omitted, as choosing either `MarriedNever` or `Maybe MaritalStatus` better expresses this state.
-- |
-- | Variants could be added or omitted depending on requirements.
-- |
-- | Variants ordered loosely by "married-ness."
data MaritalStatus
  = MarriedNever
  | MarriedWidowed
  | MarriedDivorced
  | MarriedAnnulled
  | MarriedSeparated
  | Married

derive instance Generic MaritalStatus _
derive instance Eq MaritalStatus
instance EncodeJson MaritalStatus where
  encodeJson = unsafeCrashWith "unimplemented"
instance DecodeJson MaritalStatus where
  decodeJson = unsafeCrashWith "unimplemented"

derive instance Ord MaritalStatus
instance Enum MaritalStatus where
  pred = genericPred
  succ = genericSucc
instance Bounded MaritalStatus where
  top = genericTop
  bottom = genericBottom
instance BoundedEnum MaritalStatus where
  cardinality = genericCardinality
  fromEnum = genericFromEnum
  toEnum = genericToEnum
