// This file was generated by docs-search.
window.DocsSearchIndex["32"] = [["tt",[{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},"skolem":null}},"typeClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"typeClassArguments":[{"name":"a"}]}},"moduleName":"Data.HeytingAlgebra","name":"tt","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":10,"line":54},"name":".spago/p/prelude-6.0.1/src/Data/HeytingAlgebra.purs","start":{"column":3,"line":54}}}]],["ttrecord",[{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"rowlist","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"row","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"subrow","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"rowlist"},{"tag":"TypeVar","annotation":null,"contents":"row"},{"tag":"TypeVar","annotation":null,"contents":"subrow"}],"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebraRecord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","annotation":null,"contents":"rowlist"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","annotation":null,"contents":"row"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"subrow"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"typeClass":[["Data","HeytingAlgebra"],"HeytingAlgebraRecord"],"typeClassArguments":[{"name":"rowlist"},{"name":"row"},{"name":"subrow"}]}},"moduleName":"Data.HeytingAlgebra","name":"ttRecord","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":58,"line":112},"name":".spago/p/prelude-6.0.1/src/Data/HeytingAlgebra.purs","start":{"column":3,"line":112}}}]],["sub",[{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ring"],"Ring"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]},"skolem":null}},"typeClass":[["Data","Ring"],"Ring"],"typeClassArguments":[{"name":"a"}]}},"moduleName":"Data.Ring","name":"sub","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":21,"line":28},"name":".spago/p/prelude-6.0.1/src/Data/Ring.purs","start":{"column":3,"line":28}}}]],["submap",[{"comments":"Returns a new map containing all entries of the given map which lie\nbetween a given lower and upper bound, treating `Nothing` as no bound i.e.\nincluding the smallest (or largest) key in the map, no matter how small\n(or large) it is. For example:\n\n```purescript\nsubmap (Just 1) (Just 2)\n  (fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\", Tuple 3 \"three\"])\n  == fromFoldable [Tuple 1 \"one\", Tuple 2 \"two\"]\n\nsubmap Nothing (Just 2)\n  (fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\", Tuple 3 \"three\"])\n  == fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\"]\n```\n\nThe function is entirely specified by the following\nproperty:\n\n```purescript\nGiven any m :: Map k v, mmin :: Maybe k, mmax :: Maybe k, key :: k,\n  let m' = submap mmin mmax m in\n    if (maybe true (\\min -> min <= key) mmin &&\n        maybe true (\\max -> max >= key) mmax)\n      then lookup key m == lookup key m'\n      else not (member key m')\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"k","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"v","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"k"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]},{"tag":"TypeVar","annotation":null,"contents":"v"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]},{"tag":"TypeVar","annotation":null,"contents":"v"}]}]}]}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Data.Map.Internal","name":"submap","packageInfo":{"tag":"package","value":"ordered-collections-3.2.0"},"score":0,"sourceSpan":{"end":{"column":72,"line":449},"name":".spago/p/ordered-collections-3.2.0/src/Data/Map/Internal.purs","start":{"column":1,"line":449}}}]],["subrecord",[{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"rowlist","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"row","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"subrow","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"rowlist"},{"tag":"TypeVar","annotation":null,"contents":"row"},{"tag":"TypeVar","annotation":null,"contents":"subrow"}],"constraintClass":[["Data","Ring"],"RingRecord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","annotation":null,"contents":"rowlist"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"row"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"row"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"subrow"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"typeClass":[["Data","Ring"],"RingRecord"],"typeClassArguments":[{"name":"rowlist"},{"name":"row"},{"name":"subrow"}]}},"moduleName":"Data.Ring","name":"subRecord","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":74,"line":61},"name":".spago/p/prelude-6.0.1/src/Data/Ring.purs","start":{"column":3,"line":61}}}]],["subset",[{"comments":"True if and only if every element in the first set is an element of the\nsecond set.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}]},"skolem":null}}},"moduleName":"Data.Set.NonEmpty","name":"subset","packageInfo":{"tag":"package","value":"ordered-collections-3.2.0"},"score":0,"sourceSpan":{"end":{"column":71,"line":142},"name":".spago/p/ordered-collections-3.2.0/src/Data/Set/NonEmpty.purs","start":{"column":1,"line":142}}},{"comments":"True if and only if every element in the first set\nis an element of the second set\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}]},"skolem":null}}},"moduleName":"Data.Set","name":"subset","packageInfo":{"tag":"package","value":"ordered-collections-3.2.0"},"score":0,"sourceSpan":{"end":{"column":55,"line":155},"name":".spago/p/ordered-collections-3.2.0/src/Data/Set.purs","start":{"column":1,"line":155}}}]],["succ",[{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Enum"],"Enum"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]},"skolem":null}},"typeClass":[["Data","Enum"],"Enum"],"typeClassArguments":[{"name":"a"}]}},"moduleName":"Data.Enum","name":"succ","packageInfo":{"tag":"package","value":"enums-6.0.1"},"score":0,"sourceSpan":{"end":{"column":23,"line":51},"name":".spago/p/enums-6.0.1/src/Data/Enum.purs","start":{"column":3,"line":51}}}]],["suchthat",[{"comments":"Creates a generator that repeatedly run another generator until its output\nmatches a given predicate. This will never halt if the predicate always\nfails.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"m"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"m"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Control.Monad.Gen","name":"suchThat","packageInfo":{"tag":"package","value":"gen-4.0.0"},"score":0,"sourceSpan":{"end":{"column":81,"line":109},"name":".spago/p/gen-4.0.0/src/Control/Monad/Gen.purs","start":{"column":1,"line":109}}}]],["sum",[{"comments":"A representation for types with multiple constructors.\n","hashAnchor":"t","info":{"tag":"data","value":{"dataDeclType":"data","typeArguments":[{"name":"a"},{"name":"b"}]}},"moduleName":"Data.Generic.Rep","name":"Sum","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":29,"line":30},"name":".spago/p/prelude-6.0.1/src/Data/Generic/Rep.purs","start":{"column":1,"line":30}}},{"comments":"Find the sum of the numeric values in a data structure.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Semiring"],"Semiring"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"sum","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":56,"line":378},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":378}}}]],["surround",[{"comments":"`fold` but with each element surrounded by some fixed value.\n\nFor example:\n\n```purescript\n> surround \"*\" []\n= \"*\"\n\n> surround \"*\" [\"1\"]\n= \"*1*\"\n\n> surround \"*\" [\"1\", \"2\"]\n= \"*1*2*\"\n\n> surround \"*\" [\"1\", \"2\", \"3\"]\n= \"*1*2*3*\"\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"m"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"surround","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":67,"line":352},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":352}}}]],["surroundmap",[{"comments":"`foldMap` but with each element surrounded by some fixed value.\n\nFor example:\n\n```purescript\n> surroundMap \"*\" show []\n= \"*\"\n\n> surroundMap \"*\" show [1]\n= \"*1*\"\n\n> surroundMap \"*\" show [1, 2]\n= \"*1*2*\"\n\n> surroundMap \"*\" show [1, 2, 3]\n= \"*1*2*3*\"\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"m"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"surroundMap","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":84,"line":331},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":331}}}]],["surroundmapwithindex",[{"comments":"`foldMapWithIndex` but with each element surrounded by some fixed value.\n\nFor example:\n\n```purescript\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) []\n= \"*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\"]\n= \"*0a*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\", \"b\"]\n= \"*0a*1b*\"\n\n> surroundMapWithIndex \"*\" (\\i x -> show i <> x) [\"a\", \"b\", \"c\"]\n= \"*0a*1b*2c*\"\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"i","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"i"},{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"m"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"i"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.FoldableWithIndex","name":"surroundMapWithIndex","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":288},"name":".spago/p/foldable-traversable-6.0.0/src/Data/FoldableWithIndex.purs","start":{"column":1,"line":281}}}]],[":|",[{"comments":"An infix synonym for `NonEmpty`.\n\n```purescript\nnonEmptyArray :: NonEmpty Array Int\nnonEmptyArray = 1 :| [2,3]\n\nnonEmptyList :: NonEmpty List Int\nnonEmptyList = 1 :| 2 : 3 : Nil\n```\n","hashAnchor":"v","info":{"tag":"valueAlias"},"moduleName":"Data.NonEmpty","name":"(:|)","packageInfo":{"tag":"package","value":"nonempty-7.0.0"},"score":0,"sourceSpan":{"end":{"column":24,"line":57},"name":".spago/p/nonempty-7.0.0/src/Data/NonEmpty.purs","start":{"column":1,"line":57}}}]]]