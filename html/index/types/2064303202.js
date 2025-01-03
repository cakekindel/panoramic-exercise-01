// This file was generated by docs-search
window.DocsSearchTypeIndex["2064303202"] = {"tag":"Just","value":[{"comments":"Create an array containing a range of integers, including both endpoints.\n```purescript\nrange 2 5 = [2, 3, 4, 5]\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.Array","name":"range","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":33,"line":192},"name":".spago/p/arrays-7.3.0/src/Data/Array.purs","start":{"column":1,"line":192}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.Array.NonEmpty","name":"range","packageInfo":{"tag":"package","value":"arrays-7.3.0"},"score":0,"sourceSpan":{"end":{"column":41,"line":201},"name":".spago/p/arrays-7.3.0/src/Data/Array/NonEmpty.purs","start":{"column":1,"line":201}}},{"comments":"Like `fromString`, but the integer can be specified in a different base.\n\nExample:\n``` purs\nfromStringAs binary      \"100\" == Just 4\nfromStringAs hexadecimal \"ff\"  == Just 255\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Int"],"Radix"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.Int","name":"fromStringAs","packageInfo":{"tag":"package","value":"integers-6.0.0"},"score":0,"sourceSpan":{"end":{"column":45,"line":209},"name":".spago/p/integers-6.0.0/src/Data/Int.purs","start":{"column":1,"line":209}}},{"comments":"Create a list containing a range of integers, including both endpoints.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.List","name":"range","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":32,"line":144},"name":".spago/p/lists-7.0.0/src/Data/List.purs","start":{"column":1,"line":144}}},{"comments":"Create a list containing a range of integers, including both endpoints.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.List.Lazy","name":"range","packageInfo":{"tag":"package","value":"lists-7.0.0"},"score":0,"sourceSpan":{"end":{"column":32,"line":148},"name":".spago/p/lists-7.0.0/src/Data/List/Lazy.purs","start":{"column":1,"line":148}}},{"comments":"Returns the number of code points preceding the last match of the given\npattern in the string. Returns `Nothing` when no matches are found.\n\n```purescript\n>>> lastIndexOf (Pattern \"𝐀\") \"b 𝐀𝐀 c 𝐀\"\nJust 7\n>>> lastIndexOf (Pattern \"o\") \"b 𝐀𝐀 c 𝐀\"\nNothing\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.CodePoints","name":"lastIndexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":46,"line":284},"name":".spago/p/strings-6.0.1/src/Data/String/CodePoints.purs","start":{"column":1,"line":284}}},{"comments":"Returns the number of code points preceding the first match of the given\npattern in the string. Returns `Nothing` when no matches are found.\n\n```purescript\n>>> indexOf (Pattern \"𝐀\") \"b 𝐀𝐀 c 𝐀\"\nJust 2\n>>> indexOf (Pattern \"o\") \"b 𝐀𝐀 c 𝐀\"\nNothing\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.CodePoints","name":"indexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":42,"line":255},"name":".spago/p/strings-6.0.1/src/Data/String/CodePoints.purs","start":{"column":1,"line":255}}},{"comments":"Returns the first code point of the string after dropping the given number\nof code points from the beginning, if there is such a code point. Operates\nin constant space and in time linear to the given index.\n\n```purescript\n>>> codePointAt 1 \"𝐀𝐀𝐀𝐀\"\nJust (CodePoint 0x1D400) -- represents \"𝐀\"\n-- compare to Data.String:\n>>> charAt 1 \"𝐀𝐀𝐀𝐀\"\nJust '�'\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","CodePoints"],"CodePoint"]}]}]}]}},"moduleName":"Data.String.CodePoints","name":"codePointAt","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":48,"line":160},"name":".spago/p/strings-6.0.1/src/Data/String/CodePoints.purs","start":{"column":1,"line":160}}},{"comments":"Returns the index of the last occurrence of the pattern in the\ngiven string. Returns `Nothing` if there is no match.\n\n```purescript\nlastIndexOf (Pattern \"c\") \"abcdc\" == Just 4\nlastIndexOf (Pattern \"c\") \"aaa\" == Nothing\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.CodeUnits","name":"lastIndexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":46,"line":207},"name":".spago/p/strings-6.0.1/src/Data/String/CodeUnits.purs","start":{"column":1,"line":207}}},{"comments":"Returns the index of the first occurrence of the pattern in the\ngiven string. Returns `Nothing` if there is no match.\n\n```purescript\nindexOf (Pattern \"c\") \"abcdc\" == Just 2\nindexOf (Pattern \"c\") \"aaa\" == Nothing\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.CodeUnits","name":"indexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":42,"line":169},"name":".spago/p/strings-6.0.1/src/Data/String/CodeUnits.purs","start":{"column":1,"line":169}}},{"comments":"Returns the character at the given index, if the index is within bounds.\n\n```purescript\ncharAt 2 \"Hello\" == Just 'l'\ncharAt 10 \"Hello\" == Nothing\n```\n\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Char"]}]}]}]}},"moduleName":"Data.String.CodeUnits","name":"charAt","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":38,"line":106},"name":".spago/p/strings-6.0.1/src/Data/String/CodeUnits.purs","start":{"column":1,"line":106}}},{"comments":"If the string ends with the given suffix, return the portion of the\nstring left after removing it, as a `Just` value. Otherwise, return\n`Nothing`.\n\n```purescript\nstripSuffix (Pattern \".exe\") \"psc.exe\" == Just \"psc\"\nstripSuffix (Pattern \".exe\") \"psc\" == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]}]}]}},"moduleName":"Data.String.CodeUnits","name":"stripSuffix","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":49,"line":59},"name":".spago/p/strings-6.0.1/src/Data/String/CodeUnits.purs","start":{"column":1,"line":59}}},{"comments":"If the string starts with the given prefix, return the portion of the\nstring left after removing it, as a `Just` value. Otherwise, return `Nothing`.\n\n```purescript\nstripPrefix (Pattern \"http:\") \"http://purescript.org\" == Just \"//purescript.org\"\nstripPrefix (Pattern \"http:\") \"https://purescript.org\" == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]}]}]}},"moduleName":"Data.String.CodeUnits","name":"stripPrefix","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":49,"line":46},"name":".spago/p/strings-6.0.1/src/Data/String/CodeUnits.purs","start":{"column":1,"line":46}}},{"comments":"Returns the substrings of the second string separated along occurences\nof the first string.\n\n```purescript\nsplit (Pattern \" \") \"hello world\" == [\"hello\", \"world\"]\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]}]}]}},"moduleName":"Data.String.Common","name":"split","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":58,"line":65},"name":".spago/p/strings-6.0.1/src/Data/String/Common.purs","start":{"column":1,"line":65}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodePoints","name":"drop","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":54,"line":117},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodePoints.purs","start":{"column":1,"line":117}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodePoints","name":"take","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":54,"line":105},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodePoints.purs","start":{"column":1,"line":105}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodePoints","name":"lastIndexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":54,"line":87},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodePoints.purs","start":{"column":1,"line":87}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodePoints","name":"indexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":50,"line":81},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodePoints.purs","start":{"column":1,"line":81}}},{"hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","CodePoints"],"CodePoint"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodePoints","name":"codePointAt","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":56,"line":78},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodePoints.purs","start":{"column":1,"line":78}}},{"comments":"Returns the string without the last `n` characters. Returns `Nothing` if\nmore characters are dropped than the string is long.\n\n```purescript\ndropRight 6 (NonEmptyString \"Hello World\") == Just (NonEmptyString \"Hello\")\ndropRight 20 (NonEmptyString \"Hello World\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"dropRight","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":59,"line":269},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":269}}},{"comments":"Returns the string without the first `n` characters. Returns `Nothing` if\nmore characters are dropped than the string is long.\n\n```purescript\ndrop 6 (NonEmptyString \"Hello World\") == Just (NonEmptyString \"World\")\ndrop 20 (NonEmptyString \"Hello World\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"drop","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":54,"line":253},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":253}}},{"comments":"Returns the last `n` characters of the string. Returns `Nothing` if `n` is\nless than 1.\n\n```purescript\ntake 5 (NonEmptyString \"Hello World\") == Just (NonEmptyString \"World\")\ntake 0 (NonEmptyString \"Hello World\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"takeRight","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":59,"line":227},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":227}}},{"comments":"Returns the first `n` characters of the string. Returns `Nothing` if `n` is\nless than 1.\n\n```purescript\ntake 5 (NonEmptyString \"Hello World\") == Just (NonEmptyString \"Hello\")\ntake 0 (NonEmptyString \"Hello World\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"take","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":54,"line":211},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":211}}},{"comments":"Returns the index of the last occurrence of the pattern in the\ngiven string. Returns `Nothing` if there is no match.\n\n```purescript\nlastIndexOf (Pattern \"c\") (NonEmptyString \"abcdc\") == Just 4\nlastIndexOf (Pattern \"c\") (NonEmptyString \"aaa\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"lastIndexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":54,"line":158},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":158}}},{"comments":"Returns the index of the first occurrence of the pattern in the\ngiven string. Returns `Nothing` if there is no match.\n\n```purescript\nindexOf (Pattern \"c\") (NonEmptyString \"abcdc\") == Just 2\nindexOf (Pattern \"c\") (NonEmptyString \"aaa\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"indexOf","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":50,"line":137},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":137}}},{"comments":"Returns the character at the given index, if the index is within bounds.\n\n```purescript\ncharAt 2 (NonEmptyString \"Hello\") == Just 'l'\ncharAt 10 (NonEmptyString \"Hello\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Char"]}]}]}]}},"moduleName":"Data.String.NonEmpty.CodeUnits","name":"charAt","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":46,"line":117},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/CodeUnits.purs","start":{"column":1,"line":117}}},{"comments":"If the string ends with the given suffix, return the portion of the\nstring left after removing it. If the suffix does not match or there is no\nremainder, the result will be `Nothing`.\n\n```purescript\nstripSuffix (Pattern \".exe\") (NonEmptyString \"purs.exe\") == Just (NonEmptyString \"purs\")\nstripSuffix (Pattern \".exe\") (NonEmptyString \"purs\") == Nothing\nstripSuffix (Pattern \"Hello!\") (NonEmptyString \"Hello!\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.Internal","name":"stripSuffix","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":65,"line":124},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/Internal.purs","start":{"column":1,"line":124}}},{"comments":"If the string starts with the given prefix, return the portion of the\nstring left after removing it. If the prefix does not match or there is no\nremainder, the result will be `Nothing`.\n\n```purescript\nstripPrefix (Pattern \"http:\") (NonEmptyString \"http://purescript.org\") == Just (NonEmptyString \"//purescript.org\")\nstripPrefix (Pattern \"http:\") (NonEmptyString \"https://purescript.org\") == Nothing\nstripPrefix (Pattern \"Hello!\") (NonEmptyString \"Hello!\") == Nothing\n```\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Pattern"],"Pattern"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]}},"moduleName":"Data.String.NonEmpty.Internal","name":"stripPrefix","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":65,"line":112},"name":".spago/p/strings-6.0.1/src/Data/String/NonEmpty/Internal.purs","start":{"column":1,"line":112}}},{"comments":"Split the string into an array of substrings along occurrences of the `Regex`.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Regex"],"Regex"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]}]}]}},"moduleName":"Data.String.Regex","name":"split","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":56,"line":131},"name":".spago/p/strings-6.0.1/src/Data/String/Regex.purs","start":{"column":1,"line":131}}},{"comments":"Returns `Just` the index of the first match of the `Regex` in the string,\nor `Nothing` if there is no match.\n","hashAnchor":"v","info":{"tag":"value","value":{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Data","String","Regex"],"Regex"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"String"]}]},{"tag":"TypeApp","annotation":null,"contents":[{"tag":"TypeConstructor","annotation":null,"contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Int"]}]}]}]}},"moduleName":"Data.String.Regex","name":"search","packageInfo":{"tag":"package","value":"strings-6.0.1"},"score":0,"sourceSpan":{"end":{"column":39,"line":127},"name":".spago/p/strings-6.0.1/src/Data/String/Regex.purs","start":{"column":1,"line":127}}}]}