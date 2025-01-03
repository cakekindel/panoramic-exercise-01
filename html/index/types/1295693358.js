// This file was generated by docs-search
window.DocsSearchTypeIndex["1295693358"] = {"tag":"Just","value":[{"comments":"A safe way to create and work with a mutable array before returning an\nimmutable array for later perusal. This function avoids copying the array\nbefore returning it - it uses unsafeFreeze internally, but this wrapper is\na safe interface to that function.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"h","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","annotation":null,"contents":"h"}]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","annotation":null,"contents":"h"}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]},"skolem":null}}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},"skolem":null}}},"moduleName":"Data.Array.ST","name":"run","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":59,"line":58},"name":".spago/p/arrays-7.3.0/src/Data/Array/ST.purs","start":{"column":1,"line":58}}},{"comments":"Freeze a mutable Object, creating an immutable Object. Use this function as you would use\n`Control.Monad.ST.run` (from the `purescript-st` package) to freeze a mutable reference.\n\nThe rank-2 type prevents the Object from escaping the scope of `runST`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","annotation":null,"contents":"r"}]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Foreign","Object","ST"],"STObject"]},{"tag":"TypeVar","annotation":null,"contents":"r"}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]},"skolem":null}}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},"skolem":null}}},"moduleName":"Foreign.Object","name":"runST","packageInfo":{"tag":"package","value":"foreign-object-4.1.0"},"score":0,"sourceSpan":{"end":{"column":78,"line":85},"name":".spago/p/foreign-object-4.1.0/src/Foreign/Object.purs","start":{"column":1,"line":85}}}]}