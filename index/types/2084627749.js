// This file was generated by docs-search
window.DocsSearchTypeIndex["2084627749"] = {"tag":"Just","value":[{"comments":"Compose a value which introduces a `Tuple` from two values, each introducing\none side of the `Tuple`.\n\nThis combinator is useful when assembling values from smaller components,\nbecause it provides a way to support two different types of output.\n\nSpecializing `(&&&)` to function application would look like this:\n```\n(&&&) :: forall a b c. (a -> b) -> (a -> c) -> (a -> (Tuple b c))\n```\nWe take two functions, `f` and `g`, with the same parameter type and we transform them into a\nsingle function which takes one parameter and returns a `Tuple` of the results of running\n`f` and `g` on the parameter, respectively.  This allows us to run two parallel computations\non the same input and return both results in a `Tuple`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"p","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"c","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"p"}],"constraintClass":[["Control","Semigroupoid"],"Semigroupoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"p"}],"constraintClass":[["Data","Profunctor","Strong"],"Strong"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"p"},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","annotation":null,"contents":"b"}]},{"tag":"TypeVar","annotation":null,"contents":"c"}]}}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Profunctor.Strong","name":"fanout","packageInfo":{"tag":"package","value":"profunctor-6.0.1"},"score":0,"sourceSpan":{"end":{"column":21,"line":77},"name":".spago/p/profunctor-6.0.1/src/Data/Profunctor/Strong.purs","start":{"column":1,"line":71}}}]}