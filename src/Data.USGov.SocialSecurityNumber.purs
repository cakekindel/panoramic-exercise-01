module Data.USGov.SocialSecurityNumber (SocialSecurityNumber, fromString, toString, toInt) where

import Prelude

import Data.Argonaut.Decode.Class (class DecodeJson)
import Data.Argonaut.Encode.Class (class EncodeJson)
import Data.Maybe (Maybe)
import Partial.Unsafe (unsafeCrashWith)

-- | ## U.S. Social Security Number
-- |
-- | Similar to `Data.Telecom.Phone`, a very strong alternative
-- | would be to use a `String` or `Int` newtype with input validation.
-- |
-- | Unlike [schema.org/telephone](https://schema.org/telephone),
-- | [schema.org](https://github.com/schemaorg/schemaorg/issues/1358)
-- | does not have a standards-body representation for this type of data yet,
-- | so the choice is ours depending on the use case and criticality of
-- | data model integrity.
-- |
-- | If we were the IRS, I would be tempted to break this into newtypes for
-- | each section [(Area, Group, Serial)](https://en.wikipedia.org/wiki/Social_Security_number#Structure)
-- | with much stronger validity guarantees.
-- |
-- | If the intent of this model was simply to have a representation in the
-- | application layer (between receiving SSN from user and storing it in the database),
-- | I'd choose this or a looser representation.
-- |
-- | This form was chosen as an arbitrary "medium" level of type-level
-- | assumptions & safety.
data SocialSecurityNumber = SocialSecurityNumber Int Int Int

derive instance Eq SocialSecurityNumber
derive instance Ord SocialSecurityNumber
instance Show SocialSecurityNumber where
  show = unsafeCrashWith "unimplemented"

instance EncodeJson SocialSecurityNumber where
  encodeJson = unsafeCrashWith "unimplemented"

instance DecodeJson SocialSecurityNumber where
  decodeJson = unsafeCrashWith "unimplemented"

fromString :: String -> Maybe SocialSecurityNumber
fromString = unsafeCrashWith "unimplemented"

toString :: SocialSecurityNumber -> String
toString = unsafeCrashWith "unimplemented"

toInt :: SocialSecurityNumber -> Int
toInt = unsafeCrashWith "unimplemented"
