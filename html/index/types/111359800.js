// This file was generated by docs-search
window.DocsSearchTypeIndex["111359800"] = {"tag":"Just","value":[{"comments":"Delete the first element of an array which matches the specified value,\nunder the equivalence relation provided in the first argument, creating a\nnew array.\n\n```purescript\nmod3eq a b = a `mod` 3 == b `mod` 3\ndeleteBy mod3eq 6 [1, 3, 4, 3] = [1, 4, 3]\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.Array","name":"deleteBy","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":69,"line":1193},"name":".spago/p/arrays-7.3.0/src/Data/Array.purs","start":{"column":1,"line":1193}}},{"comments":"Insert an element into a sorted array, using the specified function to\ndetermine the ordering of elements.\n\n```purescript\ninvertCompare a b = invert $ compare a b\n\ninsertBy invertCompare 10 [21, 20, 2, 1] = [21, 20, 10, 2, 1]\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Ordering"],"Ordering"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.Array","name":"insertBy","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":70,"line":295},"name":".spago/p/arrays-7.3.0/src/Data/Array.purs","start":{"column":1,"line":295}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.Array.NonEmpty","name":"deleteBy","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":77,"line":528},"name":".spago/p/arrays-7.3.0/src/Data/Array/NonEmpty.purs","start":{"column":1,"line":528}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Ordering"],"Ordering"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.Array.NonEmpty","name":"insertBy","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":86,"line":243},"name":".spago/p/arrays-7.3.0/src/Data/Array/NonEmpty.purs","start":{"column":1,"line":243}}},{"comments":"Delete the first occurrence of an element from a list, using the specified\nfunction to determine equality of elements.\n\nRunning time: `O(n)`\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.List","name":"deleteBy","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":67,"line":732},"name":".spago/p/lists-7.0.0/src/Data/List.purs","start":{"column":1,"line":732}}},{"comments":"Insert an element into a sorted list, using the specified function to\ndetermine the ordering of elements.\n\nRunning time: `O(n)`\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Ordering"],"Ordering"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.List","name":"insertBy","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":68,"line":216},"name":".spago/p/lists-7.0.0/src/Data/List.purs","start":{"column":1,"line":216}}},{"comments":"Delete the first occurrence of an element from a list, using the specified\nfunction to determine equality of elements.\n\nRunning time: `O(n)`\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Boolean"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.List.Lazy","name":"deleteBy","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":67,"line":659},"name":".spago/p/lists-7.0.0/src/Data/List/Lazy.purs","start":{"column":1,"line":659}}},{"comments":"Insert an element into a sorted list, using the specified function to determine the ordering\nof elements.\n\nRunning time: `O(n)`\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"ForAll","annotation":null,"contents":{"visibility":"TypeVarInvisible","identifier":"a","kind":null,"type":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"ParensInType","annotation":null,"contents":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Ordering"],"Ordering"]}]}]}}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","annotation":null,"contents":"a"}]}]}]}]},"skolem":null}}},"moduleName":"Data.List.Lazy","name":"insertBy","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":68,"line":235},"name":".spago/p/lists-7.0.0/src/Data/List/Lazy.purs","start":{"column":1,"line":235}}}]}