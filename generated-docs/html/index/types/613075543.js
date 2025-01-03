// This file was generated by docs-search
window.DocsSearchTypeIndex["613075543"] = {"tag":"Just","value":[{"comments":"Create a pure tail-recursive function of one argument\n\nFor example:\n\n```purescript\npow :: Int -> Int -> Int\npow n p = tailRec go { accum: 1, power: p }\n  where\n  go :: _ -> Step _ Int\n  go { accum: acc, power: 0 } = Done acc\n  go { accum: acc, power: p } = Loop { accum: acc * n, power: p - 1 }\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Control","Monad","Rec","Class"],"Step"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Control.Monad.Rec.Class","name":"tailRec","packageInfo":{"tag":"package","value":"tailrec-6.1.0"},"score":0,"sourceSpan":{"end":{"column":49,"line":100},"name":".spago/p/tailrec-6.1.0/src/Control/Monad/Rec/Class.purs","start":{"column":1,"line":100}}}]}