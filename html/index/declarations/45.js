// This file was generated by docs-search.
window.DocsSearchIndex["45"] = [["base36",[{"comments":"The base-36 system.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Int"],"Radix"]}},"moduleName":"Data.Int","name":"base36","packageInfo":{"tag":"package","value":"integers-6.0.0"},"score":0,"sourceSpan":{"end":{"column":16,"line":194},"name":".spago/p/integers-6.0.0/src/Data/Int.purs","start":{"column":1,"line":194}}}]],["above",[{"comments":"The Above type constructor combines two Docs vertically\nin a custom type error.\n\nFor more information, see\n[the Custom Type Errors guide](https://github.com/purescript/documentation/blob/master/guides/Custom-Type-Errors.md).\n","hashAnchor":"t","info":{"tag":"externData","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim","TypeError"],"Doc"]}]}]}},"moduleName":"Prim.TypeError","name":"Above","packageInfo":{"tag":"builtin"},"score":0}]],["abs",[{"comments":"The absolute value function. `abs x` is defined as `if x >= zero then x\nelse negate x`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ring"],"Ring"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]},"skolem":null}}},"moduleName":"Data.Ord","name":"abs","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":43,"line":216},"name":".spago/p/prelude-6.0.1/src/Data/Ord.purs","start":{"column":1,"line":216}}},{"comments":"Returns the absolute value of the argument.\n```purs\n> x = -42.0\n> sign x * abs x == x\ntrue\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Number"]}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Number"]}]}},"moduleName":"Data.Number","name":"abs","packageInfo":{"tag":"package","value":"numbers-9.0.1"},"score":0,"sourceSpan":{"end":{"column":39,"line":123},"name":".spago/p/numbers-9.0.1/src/Data/Number.purs","start":{"column":1,"line":123}}}]],["absurd",[{"comments":"Eliminator for the `Void` type.\nUseful for stating that some code branch is impossible because you've\n\"acquired\" a value of type `Void` (which you can't).\n\n```purescript\nrightOnly :: forall t . Either Void t -> t\nrightOnly (Left v) = absurd v\nrightOnly (Right t) = t\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Void"],"Void"]}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},"skolem":null}}},"moduleName":"Data.Void","name":"absurd","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":30,"line":31},"name":".spago/p/prelude-6.0.1/src/Data/Void.purs","start":{"column":1,"line":31}}}]],["<#>",[{"hashAnchor":"v","info":{"tag":"valueAlias"},"moduleName":"Data.Functor","name":"(<#>)","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":27,"line":44},"name":".spago/p/prelude-6.0.1/src/Data/Functor.purs","start":{"column":1,"line":44}}}]],["-",[{"hashAnchor":"v","info":{"tag":"valueAlias"},"moduleName":"Data.Ring","name":"(-)","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":18,"line":30},"name":".spago/p/prelude-6.0.1/src/Data/Ring.purs","start":{"column":1,"line":30}}}]]]