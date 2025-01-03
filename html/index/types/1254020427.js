// This file was generated by docs-search
window.DocsSearchTypeIndex["1254020427"] = {"tag":"Just","value":[{"comments":"`any f` is the same as `or <<< map f`; map a function over the structure,\nand then get the disjunction of the results.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"b"}],"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"any","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":76,"line":374},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":374}}},{"comments":"`all f` is the same as `and <<< map f`; map a function over the structure,\nand then get the conjunction of the results.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"b","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"b"}],"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"b"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"all","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":76,"line":369},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":369}}},{"comments":"A default implementation of `foldMap` using `foldr`.\n\nNote: when defining a `Foldable` instance, this function is unsafe to use\nin combination with `foldrDefault`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"foldMapDefaultR","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":114},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":108}}},{"comments":"A default implementation of `foldMap` using `foldl`.\n\nNote: when defining a `Foldable` instance, this function is unsafe to use\nin combination with `foldlDefault`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Foldable","name":"foldMapDefaultL","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":7,"line":127},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":1,"line":121}}},{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"f","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"f"}],"constraintClass":[["Data","Foldable"],"Foldable"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Monoid"],"Monoid"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"f"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"typeClass":[["Data","Foldable"],"Foldable"],"typeClassArguments":[{"name":"f"}]}},"moduleName":"Data.Foldable","name":"foldMap","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":58,"line":76},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Foldable.purs","start":{"column":3,"line":76}}},{"comments":"A default implementation of `foldMap1` using `foldl1`.\n\nNote: when defining a `Foldable1` instance, this function is unsafe to use\nin combination with `foldl1Default`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"t","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"t"}],"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"t"}],"constraintClass":[["Data","Functor"],"Functor"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"t"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Semigroup.Foldable","name":"foldMap1DefaultL","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":98,"line":79},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Semigroup/Foldable.purs","start":{"column":1,"line":79}}},{"comments":"A default implementation of `foldMap1` using `foldr1`.\n\nNote: when defining a `Foldable1` instance, this function is unsafe to use\nin combination with `foldr1Default`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"t","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"t"}],"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"t"}],"constraintClass":[["Data","Functor"],"Functor"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"t"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Data.Semigroup.Foldable","name":"foldMap1DefaultR","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":98,"line":72},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Semigroup/Foldable.purs","start":{"column":1,"line":72}}},{"hashAnchor":"v","info":{"tag":"typeClassMember","value":{"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"t","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"m","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"t"}],"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"m"}],"constraintClass":[["Data","Semigroup"],"Semigroup"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeVar","annotation":null,"contents":"t"},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeVar","annotation":null,"contents":"m"}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"typeClass":[["Data","Semigroup","Foldable"],"Foldable1"],"typeClassArguments":[{"name":"t"}]}},"moduleName":"Data.Semigroup.Foldable","name":"foldMap1","packageInfo":{"tag":"package","value":"foldable-traversable-6.0.0"},"score":0,"sourceSpan":{"end":{"column":62,"line":52},"name":".spago/p/foldable-traversable-6.0.0/src/Data/Semigroup/Foldable.purs","start":{"column":3,"line":52}}}]}