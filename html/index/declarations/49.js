// This file was generated by docs-search.
window.DocsSearchIndex["49"] = [["fail",[{"comments":"The Fail type class is part of the custom type errors feature. To provide\na custom type error when someone tries to use a particular instance,\nwrite that instance out with a Fail constraint.\n\nFor more information, see\n[the Custom Type Errors guide](https://github.com/purescript/documentation/blob/master/guides/Custom-Type-Errors.md).\n","hashAnchor":"t","info":{"tag":"typeClass","value":{"arguments":[{"kind":{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]},"name":"message"}],"fundeps":[],"superclasses":[]}},"moduleName":"Prim.TypeError","name":"Fail","packageInfo":{"tag":"builtin"},"score":0}]],["false",[{"comments":"The 'False' boolean type.\n","hashAnchor":"t","info":{"tag":"externData","value":{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}},"moduleName":"Prim.Boolean","name":"False","packageInfo":{"tag":"builtin"},"score":0}]],["fanin",[{"comments":"Compose a value which eliminates a sum from two values, each eliminating\none side of the sum.\n\nThis combinator is useful when assembling values from smaller components,\nbecause it provides a way to support two different types of input.\n\nSpecializing `(|||)` to function application would look like this:\n```\n(|||) :: forall a b c d. (a -> c) -> (b -> c) -> Either a b -> c\n```\nWe take two functions, `f` and `g`, which both return the same type `c` and we transform them into a\nsingle function which takes an `Either` value with the parameter type of `f` on the left side and\nthe parameter type of `g` on the right side. The function then runs either `f` or `g`, depending on\nwhether the `Either` value is a `Left` or a `Right`.\nThis allows us to bundle two different computations which both have the same result type into one\nfunction which will run the approriate computation based on the parameter supplied in the `Either` value.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"p","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"c","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"p"}],"constraintClass":[["Control","Semigroupoid"],"Semigroupoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"p"}],"constraintClass":[["Data","Profunctor","Choice"],"Choice"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"b"}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Profunctor.Choice","name":"fanin","packageInfo":{"tag":"package","value":"profunctor-6.0.1"},"score":0,"sourceSpan":{"end":{"column":22,"line":80},"name":".spago/p/profunctor-6.0.1/src/Data/Profunctor/Choice.purs","start":{"column":1,"line":74}}}]],["fanout",[{"comments":"Compose a value which introduces a `Tuple` from two values, each introducing\none side of the `Tuple`.\n\nThis combinator is useful when assembling values from smaller components,\nbecause it provides a way to support two different types of output.\n\nSpecializing `(&&&)` to function application would look like this:\n```\n(&&&) :: forall a b c. (a -> b) -> (a -> c) -> (a -> (Tuple b c))\n```\nWe take two functions, `f` and `g`, with the same parameter type and we transform them into a\nsingle function which takes one parameter and returns a `Tuple` of the results of running\n`f` and `g` on the parameter, respectively.  This allows us to run two parallel computations\non the same input and return both results in a `Tuple`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"p","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"c","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"p"}],"constraintClass":[["Control","Semigroupoid"],"Semigroupoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"p"}],"constraintClass":[["Data","Profunctor","Strong"],"Strong"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","annotation":null,"contents":"b"}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Profunctor.Strong","name":"fanout","packageInfo":{"tag":"package","value":"profunctor-6.0.1"},"score":0,"sourceSpan":{"end":{"column":21,"line":77},"name":".spago/p/profunctor-6.0.1/src/Data/Profunctor/Strong.purs","start":{"column":1,"line":71}}}]],["c2",[{"hashAnchor":"t","info":{"tag":"typeSynonym","value":{"arguments":[{"name":"a"},{"name":"z"}],"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Functor","Coproduct"],"Coproduct"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"z"}]}}},"moduleName":"Data.Functor.Coproduct.Nested","name":"C2","packageInfo":{"tag":"package","value":"functors-5.0.0"},"score":0,"sourceSpan":{"end":{"column":28,"line":32},"name":".spago/p/functors-5.0.0/src/Data/Functor/Coproduct/Nested.purs","start":{"column":1,"line":32}}}]],["beside",[{"comments":"The Beside type constructor combines two Docs horizontally\nto be used in a custom type error.\n\nFor more information, see\n[the Custom Type Errors guide](https://github.com/purescript/documentation/blob/master/guides/Custom-Type-Errors.md).\n","hashAnchor":"t","info":{"tag":"externData","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]}]}]}},"moduleName":"Prim.TypeError","name":"Beside","packageInfo":{"tag":"builtin"},"score":0}]],["between",[{"comments":"Test whether a value is between a minimum and a maximum (inclusive).\nFor example:\n\n``` purescript\nlet f = between 0 10\nf 0    == true\nf (-5) == false\nf 5    == true\nf 10   == true\nf 15   == false\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}]}]},"skolem":null}}},"moduleName":"Data.Ord","name":"between","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":53,"line":208},"name":".spago/p/prelude-6.0.1/src/Data/Ord.purs","start":{"column":1,"line":208}}}]]]