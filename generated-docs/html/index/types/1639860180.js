// This file was generated by docs-search
window.DocsSearchTypeIndex["1639860180"] = {"tag":"Just","value":[{"comments":"Similar to `maybe` but for use in cases where the default value may be\nexpensive to compute. As PureScript is not lazy, the standard `maybe` has\nto evaluate the default value before returning the result, whereas here\nthe value is only computed when the `Maybe` is known to be `Nothing`.\n\n``` purescript\nmaybe' (\\_ -> x) f Nothing == x\nmaybe' (\\_ -> x) f (Just y) == f y\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Data.Maybe","name":"maybe'","packageInfo":{"tag":"package","value":"maybe-6.0.0"},"score":0,"sourceSpan":{"end":{"column":62,"line":250},"name":".spago/p/maybe-6.0.0/src/Data/Maybe.purs","start":{"column":1,"line":250}}}]}