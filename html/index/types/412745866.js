// This file was generated by docs-search
window.DocsSearchTypeIndex["412745866"] = {"tag":"Just","value":[{"comments":"A version of `traverse_` with its arguments flipped.\n\nThis can be useful when running an action written using do notation\nfor every element in a data structure:\n\nFor example:\n\n```purescript\nfor_ [1, 2, 3] \\n -> do\n  print n\n  trace \"squared is\"\n  print (n * n)\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Control","Applicative"],"Applicative"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"m"},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"m"},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"for_","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":12,"line":271},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":265}}},{"comments":"A version of `traverse1_` with its arguments flipped.\n\nThis can be useful when running an action written using do notation\nfor every element in a data structure:\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"t","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"t"}],"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Control","Apply"],"Apply"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"t"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Semigroup.Foldable","name":"for1_","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":79,"line":124},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Semigroup/Foldable.purs","start":{"column":1,"line":124}}}]}