module Type.Row.MaybeFields (class MaybeFields) where

import Prelude

import Data.Maybe (Maybe(..))
import Partial.Unsafe (unsafeCrashWith)
import Prim.Row (class Cons)
import Prim.RowList (class RowToList, Cons, Nil, RowList)

-- | Typeclass that wraps every value in a row type with `Maybe`.
-- |
-- | **Note**: In production code, I would rename this class to something
-- | like `MaybeFieldsImpl` and add a superclass with flipped functional
-- | dependencies `r -> rl ..` so that all the boilerplate `RowToList` constraints
-- | can be omitted.
-- |
-- | ## Example
-- | ```purs
-- | type Foo = (foo :: String, bar :: Int)
-- | 
-- | doSomethingWithMaybeFoo ::
-- |   forall r rl foorl.
-- |   RowToList Foo foorl =>
-- |   RowToList r rl =>
-- |   MaybeFields foorl Foo rl r =>
-- |   Record r ->
-- |   Unit
-- | doSomethingWithMaybeFoo _ = unsafeCrashWith "unimplemented"
-- | 
-- | fooMaybe {foo: Just "hello", bar: Nothing} -- compiles
-- | ```
class MaybeFields ::
  RowList Type ->
  Row Type ->
  RowList Type ->
  Row Type ->
  Constraint
class
  ( RowToList a arl
  , RowToList b brl
  ) <=
  MaybeFields arl a brl b
  | arl -> a brl b

instance MaybeFields Nil () Nil ()
instance
  ( Cons k v atail a
  , Cons k (Maybe v) btail b
  , RowToList a (Cons k v atailrl)
  , RowToList b (Cons k (Maybe v) btailrl)
  , MaybeFields atailrl atail btailrl btail
  ) =>
  MaybeFields (Cons k v atailrl) a (Cons k (Maybe v) btailrl) b

type Foo = (foo :: String, bar :: Int)

fooMaybe ::
  forall r rl foorl.
  RowToList Foo foorl =>
  RowToList r rl =>
  MaybeFields foorl Foo rl r =>
  Record r ->
  Unit
fooMaybe _ = unsafeCrashWith "unimplemented"

fooMaybeWorks :: Unit
fooMaybeWorks = fooMaybe { foo: Just "hello", bar: Nothing }
