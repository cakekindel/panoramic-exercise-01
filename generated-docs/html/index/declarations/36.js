// This file was generated by docs-search.
window.DocsSearchIndex["36"] = [["symbol",[{"comments":"`Symbol` is the kind of type-level strings.\n\nConstruct types of this kind using the same literal syntax as documented\nfor strings.\n\n    type Hello :: Symbol\n    type Hello = \"Hello, world\"\n\n","hashAnchor":"t","info":{"tag":"externData","value":{"tag":"TypeConstructor","annotation":null,"contents":[["Prim"],"Type"]}},"moduleName":"Prim","name":"Symbol","packageInfo":{"tag":"builtin"},"score":0}]],["+++",[{"hashAnchor":"v","info":{"tag":"valueAlias"},"moduleName":"Data.Profunctor.Choice","name":"(+++)","packageInfo":{"tag":"package","value":"profunctor-6.0.1"},"score":0,"sourceSpan":{"end":{"column":28,"line":56},"name":".spago/p/profunctor-6.0.1/src/Data/Profunctor/Choice.purs","start":{"column":1,"line":56}}}]],["$",[{"hashAnchor":"t","info":{"tag":"typeAlias"},"moduleName":"Type.Function","name":"type ($)","packageInfo":{"tag":"package","value":"typelevel-prelude-7.0.0"},"score":0,"sourceSpan":{"end":{"column":25,"line":12},"name":".spago/p/typelevel-prelude-7.0.0/src/Type/Function.purs","start":{"column":1,"line":12}}},{"comments":"Applies a function to an argument: the reverse of `(#)`.\n\n```purescript\nlength $ groupBy productCategory $ filter isInStock $ products\n```\n\nis equivalent to:\n\n```purescript\nlength (groupBy productCategory (filter isInStock products))\n```\n\nOr another alternative equivalent, applying chain of composed functions to\na value:\n\n```purescript\nlength <<< groupBy productCategory <<< filter isInStock $ products\n```\n","hashAnchor":"v","info":{"tag":"valueAlias"},"moduleName":"Data.Function","name":"($)","packageInfo":{"tag":"package","value":"prelude-6.0.1"},"score":0,"sourceSpan":{"end":{"column":20,"line":69},"name":".spago/p/prelude-6.0.1/src/Data/Function.purs","start":{"column":1,"line":69}}}]]]