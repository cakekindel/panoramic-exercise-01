// This file was generated by docs-search
window.DocsSearchTypeIndex["1907844408"] = {"tag":"Just","value":[{"comments":"If the list starts with the given prefix, return the portion of the\nlist left after removing it, as a Just value. Otherwise, return Nothing.\n* `stripPrefix (Pattern (1:Nil)) (1:2:Nil) == Just (2:Nil)`\n* `stripPrefix (Pattern Nil) (1:Nil) == Just (1:Nil)`\n* `stripPrefix (Pattern (2:Nil)) (1:Nil) == Nothing`\n\nRunning time: `O(n)` where `n` is the number of elements to strip.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Eq"],"Eq"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List"],"Pattern"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]}]}]}]},"skolem":null}}},"moduleName":"Data.List","name":"stripPrefix","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":71,"line":495},"name":".spago/p/lists-7.0.0/src/Data/List.purs","start":{"column":1,"line":495}}},{"comments":"If the list starts with the given prefix, return the portion of the\nlist left after removing it, as a Just value. Otherwise, return Nothing.\n* `stripPrefix (Pattern (fromFoldable [1])) (fromFoldable [1,2]) == Just (fromFoldable [2])`\n* `stripPrefix (Pattern (fromFoldable [])) (fromFoldable [1]) == Just (fromFoldable [1])`\n* `stripPrefix (Pattern (fromFoldable [2])) (fromFoldable [1]) == Nothing`\n\nRunning time: `O(n)` where `n` is the number of elements to strip.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Eq"],"Eq"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy"],"Pattern"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]}]}]}]},"skolem":null}}},"moduleName":"Data.List.Lazy","name":"stripPrefix","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":71,"line":484},"name":".spago/p/lists-7.0.0/src/Data/List/Lazy.purs","start":{"column":1,"line":484}}},{"comments":"The set of elements which are in both the first and second set. `Nothing`\nif the sets are disjoint.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]}]}]}]},"skolem":null}}},"moduleName":"Data.Set.NonEmpty","name":"intersection","packageInfo":{"tag":"package","value":"ordered-collections-3.2.0"},"score":0,"sourceSpan":{"end":{"column":91,"line":152},"name":".spago/p/ordered-collections-3.2.0/src/Data/Set/NonEmpty.purs","start":{"column":1,"line":152}}},{"comments":"Form the set difference. `Nothing` if the first is a subset of the second.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"a"}],"constraintClass":[["Data","Ord"],"Ord"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}}]}]}]}]},"skolem":null}}},"moduleName":"Data.Set.NonEmpty","name":"difference","packageInfo":{"tag":"package","value":"ordered-collections-3.2.0"},"score":0,"sourceSpan":{"end":{"column":89,"line":137},"name":".spago/p/ordered-collections-3.2.0/src/Data/Set/NonEmpty.purs","start":{"column":1,"line":137}}}]}