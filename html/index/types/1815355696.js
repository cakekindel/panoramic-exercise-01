// This file was generated by docs-search
window.DocsSearchTypeIndex["1815355696"] = {"tag":"Just","value":[{"comments":"Fold over the entries of a given map where the key is between a lower and\nan upper bound. Passing `Nothing` as either the lower or upper bound\nargument means that the fold has no lower or upper bound, i.e. the fold\nstarts from (or ends with) the smallest (or largest) key in the map.\n\n```purescript\nfoldSubmap (Just 1) (Just 2) (\\_ v -> [v])\n (fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\", Tuple 3 \"three\"])\n == [\"one\", \"two\"]\n\nfoldSubmap Nothing (Just 2) (\\_ v -> [v])\n (fromFoldable [Tuple 0 \"zero\", Tuple 1 \"one\", Tuple 2 \"two\", Tuple 3 \"three\"])\n == [\"zero\", \"one\", \"two\"]\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"k","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"v","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"k"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"v"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","annotation":null,"contents":"k"}]},{"tag":"TypeVar","annotation":null,"contents":"v"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Map.Internal","name":"foldSubmap","packageInfo":{"tag":"package","value":"ordered-collections-3.2.0"},"score":0,"sourceSpan":{"end":{"column":101,"line":382},"name":".spago/p/ordered-collections-3.2.0/src/Data/Map/Internal.purs","start":{"column":1,"line":382}}}]}