module Data.Telecom.Phone (Phone, fromString) where

import Prelude

import Data.Argonaut.Decode.Class (class DecodeJson)
import Data.Argonaut.Encode.Class (class EncodeJson)
import Data.Maybe (Maybe)
import Partial.Unsafe (unsafeCrashWith)

-- | ## Phone Number
-- |
-- | Similar to `Data.USGov.SocialSecurityNumber`, a very strong alternative
-- | would be to use a `String` newtype with input validation
-- | (see [schema.org/telephone](https://schema.org/telephone))
-- | to be more resilient to formatting and internationalization.
-- |
-- | This form was chosen as an arbitrary "medium" level of type-level
-- | assumptions & safety.
newtype Phone = Phone
  { countryCode :: Maybe Int
  , number :: Int
  }

derive instance Eq Phone
derive instance Ord Phone
derive newtype instance Show Phone
derive newtype instance EncodeJson Phone
derive newtype instance DecodeJson Phone

fromString :: String -> Maybe Phone
fromString = unsafeCrashWith "unimplemented"
