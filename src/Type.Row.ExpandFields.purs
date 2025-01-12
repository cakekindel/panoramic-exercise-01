module Type.Row.ExpandFields (class ExpandFields, expandFields) where

import Data.Maybe (Maybe)
import Partial.Unsafe (unsafeCrashWith)
import Prim.Row (class Union)
import Prim.RowList (class RowToList)
import Type.Row.MaybeFields (class MaybeFields)

-- | Widen a partial record to a full destination record type, with
-- | all keys wrapped in `Maybe` to indicate presence or lack of presence
-- | in the original record.
-- |
-- | **Note**: In production code, I would rename this class to something
-- | like `ExpandFieldsImpl` and add a superclass with flipped functional
-- | dependencies `r -> rl ..` so that all the boilerplate `RowToList` constraints
-- | can be omitted.
-- |
-- | ## Example
-- | ```purs
-- | type Foo = (foo :: String, bar :: Int)
-- | type FooMaybe = (foo :: Maybe String, bar :: Maybe Int)
-- | 
-- | fooExpand
-- |   :: forall part missing frl fmrl.
-- |   Union part missing Foo =>
-- |   RowToList Foo frl =>
-- |   RowToList FooMaybe fmrl =>
-- |   MaybeFields frl Foo fmrl FooMaybe =>
-- |   ExpandFields frl Foo fmrl FooMaybe =>
-- |   Record part ->
-- |   Record FooMaybe
-- | fooExpand _ = unsafeCrashWith "unimplemented"
-- | 
-- | fooExpand {foo: "hello"} -- {foo: Just _, bar: Nothing}
-- | fooExpand {}             -- {foo: Nothing, bar: Nothing}
-- | fooExpand {baz: "hi"}    -- compile error
-- | ```
class
  ( MaybeFields rl r rmayberl rmaybe
  ) <=
  ExpandFields rl r rmayberl rmaybe
  | rl -> r rmayberl rmaybe where
  -- | Given any arbitrary partial record `part` which is
  -- | `missing` some fields from `r`, transform a record of
  -- | `part` to `rmaybe`, which is `r` with all fields wrapped in `Maybe`.
  expandFields ::
    forall part missing.
    Union part missing r =>
    Record part ->
    Record rmaybe

instance (MaybeFields rl r rmayberl rmaybe) => ExpandFields rl r rmayberl rmaybe where
  expandFields = unsafeCrashWith "unimplemented"

type Foo = (foo :: String, bar :: Int)

fooExpand ::
  forall part missing foorl foomaybe foomayberl.
  Union part missing Foo =>
  RowToList Foo foorl =>
  RowToList foomaybe foomayberl =>
  MaybeFields foorl Foo foomayberl foomaybe =>
  ExpandFields foorl Foo foomayberl foomaybe =>
  Record part ->
  { foo :: Maybe String, bar :: Maybe Int }
fooExpand _ = unsafeCrashWith "unimplemented"

fooExpandWorks :: { foo :: Maybe String, bar :: Maybe Int }
fooExpandWorks = fooExpand { foo: "hello" }
