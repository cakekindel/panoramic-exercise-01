// This file was generated by docs-search
window.DocsSearchTypeIndex["1552324679"] = {"tag":"Just","value":[{"comments":"Run an `ST` computation.\n\nNote: the type of `run` uses a rank-2 type to constrain the phantom\ntype `r`, such that the computation must not leak any mutable references\nto the surrounding computation. It may cause problems to apply this\nfunction using the `$` operator. The recommended approach is to use\nparentheses instead.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","annotation":null,"contents":"r"}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},"skolem":null}}}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},"skolem":null}}},"moduleName":"Control.Monad.ST.Internal","name":"run","packageInfo":{"tag":"package","value":"st-6.2.0"},"score":0,"sourceSpan":{"end":{"column":56,"line":89},"name":".spago/p/st-6.2.0/src/Control/Monad/ST/Internal.purs","start":{"column":1,"line":89}}}]}