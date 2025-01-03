// This file was generated by docs-search
window.DocsSearchTypeIndex["1857287686"] = {"tag":"Just","value":[{"comments":"`anyWithIndex f` is the same as `or <<< mapWithIndex f`; map a function over the\nstructure, and then get the disjunction of the results.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"i","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"i"},{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"b"}],"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"i"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.FoldableWithIndex","name":"anyWithIndex","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":311},"name":".spago/p/foldable-traversable-6.0.0/src/Data/FoldableWithIndex.purs","start":{"column":1,"line":305}}},{"comments":"`allWithIndex f` is the same as `and <<< mapWithIndex f`; map a function over the\nstructure, and then get the conjunction of the results.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"i","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"i"},{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"b"}],"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"i"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.FoldableWithIndex","name":"allWithIndex","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":300},"name":".spago/p/foldable-traversable-6.0.0/src/Data/FoldableWithIndex.purs","start":{"column":1,"line":294}}},{"comments":"A default implementation of `foldMapWithIndex` using `foldlWithIndex`.\n\nNote: when defining a `FoldableWithIndex` instance, this function is\nunsafe to use in combination with `foldlWithIndexDefault`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"i","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"i"},{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"i"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.FoldableWithIndex","name":"foldMapWithIndexDefaultL","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":116},"name":".spago/p/foldable-traversable-6.0.0/src/Data/FoldableWithIndex.purs","start":{"column":1,"line":110}}},{"comments":"A default implementation of `foldMapWithIndex` using `foldrWithIndex`.\n\nNote: when defining a `FoldableWithIndex` instance, this function is\nunsafe to use in combination with `foldrWithIndexDefault`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"i","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"i"},{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"i"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.FoldableWithIndex","name":"foldMapWithIndexDefaultR","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":103},"name":".spago/p/foldable-traversable-6.0.0/src/Data/FoldableWithIndex.purs","start":{"column":1,"line":97}}},{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"i","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"i"},{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"i"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}},"typeClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"typeClassArguments":[{"name":"i"},{"name":"f"}]}},"moduleName":"Data.FoldableWithIndex","name":"foldMapWithIndex","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":72,"line":65},"name":".spago/p/foldable-traversable-6.0.0/src/Data/FoldableWithIndex.purs","start":{"column":3,"line":65}}}]}