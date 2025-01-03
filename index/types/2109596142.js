// This file was generated by docs-search
window.DocsSearchTypeIndex["2109596142"] = {"tag":"Just","value":[{"comments":"Create an `Unfoldable1` by repeated application of a function to a seed value.\nFor example:\n\n``` purescript\n(iterateN 5 (_ + 1) 0 :: Array Int) == [0, 1, 2, 3, 4]\n(iterateN 5 (_ + 1) 0 :: NonEmptyArray Int) == NonEmptyArray [0, 1, 2, 3, 4]\n\n(iterateN 0 (_ + 1) 0 :: Array Int) == [0]\n(iterateN 0 (_ + 1) 0 :: NonEmptyArray Int) == NonEmptyArray [0]\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]}]},"skolem":null}},"skolem":null}}},"moduleName":"Data.Unfoldable1","name":"iterateN","packageInfo":{"tag":"package","value":"unfoldable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":69,"line":126},"name":".spago/p/unfoldable-6.0.0/src/Data/Unfoldable1.purs","start":{"column":1,"line":126}}}]}