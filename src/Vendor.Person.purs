module Vendor.Person where

import Data.Argonaut.Core (Json)
import Data.Argonaut.Decode (class DecodeJson, JsonDecodeError)
import Data.Either (Either)
import Data.Maybe (Maybe)
import Data.Person.MaritalStatus (MaritalStatus)
import Data.Telecom.Phone (Phone)
import Data.USGov.SocialSecurityNumber (SocialSecurityNumber)
import Partial.Unsafe (unsafeCrashWith)
import Prim.Row (class Union)
import Prim.RowList (class RowToList)
import Type.Row.ExpandFields (class ExpandFields)

-- | ## Person Record
-- |
-- | ### Usage
-- | Considering two usecases for "partial input needing validation"
-- | in the module documentation:
-- | - Partial HTTP Patch
-- | - UI Form input
-- |
-- | #### Partial HTTP PATCH
-- | A partial record of this row type is deserialized from JSON sent by
-- | clients into `PartialPerson`. (see `decodePartialPerson`)
-- |
-- | Data validation is deferred to the corresponding JSON (de)serialization
-- | instances for the individual fields.
-- |
-- | Because the record is partial, and we can't access fields that may not
-- | be present, we use a helper of some kind (see stub `class ExpandFields`)
-- | to convert the partial row type to a hard record with present fields
-- | wrapped in `Just` and missing fields set to `Nothing`.
-- |
-- | We commit the new state from `Just`s to persistent state (database), and
-- | do nothing on the fields set to `Nothing`.
-- |
-- | **Note**: A vitally important part of PATCH contracts in my experience is
-- | that using a field's **presence** in a PATCH record, rather than `null`
-- | or non-`null` allows disambiguating between clearing an optional field
-- | vs not updating it.
-- |
-- | #### Form Input
-- | Form state is `PartialPerson`, where as the user progresses through
-- | the form, the fields are set to `Just`.
-- |
-- | Phone & SSN validation performed by `Data.Telecom.Phone.fromString` and
-- | `Data.USGov.SocialSecurityNumber.fromString` respectively.
-- |
-- | Validating `MaritalStatus` unnecessary because the frontend should
-- | use classes (`BoundedEnum` or similar) to enumerate over the variants
-- | driving dropdown values directly.
-- |
-- | May be worth considering a dual of `class ExpandFields` like
-- | `class ContractFields` that un-maybes the values so we can PATCH it easily.
-- |
-- | In the past I've written a typelevel Form abstraction
-- | which would capture the progressively-filled-out and potentially invalid
-- | state of building a record in this way.
type Person = Record PersonRow

type PersonRow =
  ( firstName :: String
  , lastName :: String
  , maritalStatus :: Maybe MaritalStatus
  , phone :: Phone
  , ssn :: SocialSecurityNumber
  )

-- | ## Partial Person
-- | `Person`, but all fields wrapped in `Maybe` to indicate their
-- | presence (or lack of presence)
type PartialPerson = Record PartialPersonRow

type PartialPersonRow =
  ( firstName :: Maybe (String)
  , lastName :: Maybe (String)
  , maritalStatus :: Maybe (Maybe MaritalStatus)
  , phone :: Maybe (Phone)
  , ssn :: Maybe (SocialSecurityNumber)
  )

-- | Try to decode a partial JSON record (`part`) of a `Person`.
-- |
-- | Omitted fields set to `Nothing`, present fields set to `Just`.
-- |
-- | ### Examples
-- | `{}` results in `Right {firstName: Nothing, lastName: Nothing, ...}`
-- |
-- | `{"firstName": "Henry"}` results in `Right {firstName: Just "Henry", lastName: Nothing, ...}`
decodePartialPerson
  :: forall part missing personrl partpersonrl.
  DecodeJson (Record part) =>
  Union part missing PersonRow =>
  RowToList PersonRow personrl =>
  RowToList PartialPersonRow partpersonrl =>
  ExpandFields personrl PersonRow partpersonrl PartialPersonRow =>
  Json ->
  Either JsonDecodeError PartialPerson
decodePartialPerson _ = unsafeCrashWith "unimplemented"
