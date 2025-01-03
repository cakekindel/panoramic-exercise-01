// This file was generated by docs-search
window.DocsSearchTypeIndex["660545990"] = {"tag":"Just","value":[{"comments":"Merges two records with the first record's labels taking precedence in the\ncase of overlaps.\n\nFor example:\n\n```purescript\nmerge { x: 1, y: \"y\" } { y: 2, z: true }\n :: { x :: Int, y :: String, z :: Boolean }\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r1","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r2","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r3","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r4","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"r1"},{"tag":"TypeVar","annotation":null,"contents":"r2"},{"tag":"TypeVar","annotation":null,"contents":"r3"}],"constraintClass":[["Prim","Row"],"Union"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"r3"},{"tag":"TypeVar","annotation":null,"contents":"r4"}],"constraintClass":[["Prim","Row"],"Nub"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"r1"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"r2"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"r4"}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Record","name":"merge","packageInfo":{"tag":"package","value":"record-4.0.0"},"score":0,"sourceSpan":{"end":{"column":15,"line":168},"name":".spago/p/record-4.0.0/src/Record.purs","start":{"column":1,"line":162}}},{"comments":"Delete a property for a label which is specified using a value-level proxy for\na type-level string.\n\nNote that the type of the resulting row must _lack_ the specified property.\nSince duplicate labels are allowed, this is checked with a type class constraint.\n\nFor example:\n\n```purescript\ndelete (Proxy :: Proxy \"x\")\n  :: forall r a. Lacks \"x\" r => { x :: a | r } -> { | r }\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r1","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"r2","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"l","kind":null,"type":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"l"}],"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"l"},{"tag":"TypeVar","annotation":null,"contents":"r1"}],"constraintClass":[["Prim","Row"],"Lacks"],"constraintData":null,"constraintKindArgs":[]},{"tag":"ConstrainedType","annotation":null,"contents":[{"constraintAnn":null,"constraintArgs":[{"tag":"TypeVar","annotation":null,"contents":"l"},{"tag":"TypeVar","annotation":null,"contents":"a"},{"tag":"TypeVar","annotation":null,"contents":"r1"},{"tag":"TypeVar","annotation":null,"contents":"r2"}],"constraintClass":[["Prim","Row"],"Cons"],"constraintData":null,"constraintKindArgs":[]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","annotation":null,"contents":"l"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"r2"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Record"]},{"tag":"TypeVar","annotation":null,"contents":"r1"}]}]}]}]}]}]},"skolem":null}},"skolem":null}},"skolem":null}},"skolem":null}}},"moduleName":"Record","name":"delete","packageInfo":{"tag":"package","value":"record-4.0.0"},"score":0,"sourceSpan":{"end":{"column":15,"line":124},"name":".spago/p/record-4.0.0/src/Record.purs","start":{"column":1,"line":117}}}]}