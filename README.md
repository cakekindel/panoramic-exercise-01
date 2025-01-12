# Data Modeling & Design

<details>
<summary>

## Prompt
</summary>

### Input
Please author the types for two representations of a Person along with the types of the function signatures converting one to the other.

- **Editing**: Various fields may be in an incomplete or invalid state while a person is in the process of being edited.
- **Validated / Fully Formed**: This model will be consumed by the rest of the application and should make impossible states unrepresentable, act as proof that the model has passed certain validations, and assist users of the model by preventing structural mistakes, enforcing semantics, and simplifying use.

For this exercise we will limit the fields we model to:
- First Name
- Last Name
- Social Security Number
- Marital Status
- US Phone Number

Consider data integrity, usage ergonomics, transparency of the Api, and any other quality measures you generally value.

You should design the validated Person based upon your own personal experience.

### Output
- Type signatures for both the editable and the validated version of a Person.
- Key function signatures involved in translating an editable version of a Person to a validated Person. Do not worry about implementing these.
  - If there are any validations that cannot be represented in types then please do include a few code comments discussing those.
- Briefly describe the Module organization for these types and what should be exposed and what should be hidden. Be ready to discuss how this impacts total system maintainability.
</details>

## Output
Implemented as documented stub purescript files, using purescript's documentation generation
to host a browsable output hosted on [Github pages](https://cakekindel.github.io/panoramic-exercise-01/ACMECorp.Person.html).

In my response I've written a straightforward idiomatic Purescript representation of `Person` and `PartialPerson`,
essentially two record types:

```haskell
type Person =
  { firstName :: String
  , phone :: Phone
  , {- snip -}
  }

type PartialPerson =
  { firstName :: Maybe String
  , phone :: Phone
  , {- snip -}
  }
```

With newtype wrappers that defer validation to either a function `fromString` in the same module,
or typeclass implementations dedicated to specific serialization & deserialization (eg. `Data.Argonaut.Decode (class DecodeJSON)`).

An important factor when working with polymorphic row types, and by extension records, is composition
and manipulation of these row types. For example, with the right primitives, supporting
partial input records for usecases like partial HTTP PATCH or forms in UI state become extremely straightforward.

I've included stubs for typeclasses that solve this ([`ExpandFields`](https://cakekindel.github.io/panoramic-exercise-01/Type.Row.ExpandFields.html), [`MaybeFields`](https://cakekindel.github.io/panoramic-exercise-01/Type.Row.MaybeFields.html)),
as well as documentation with motivating usecases.

### Modules
* [`ACMECorp.Person`](https://cakekindel.github.io/panoramic-exercise-01/ACMECorp.Person.html)
* `Data`
  * [`Person.MaritalStatus`](https://cakekindel.github.io/panoramic-exercise-01/Data.Person.MaritalStatus.html)
  * [`Telecom.Phone`](https://cakekindel.github.io/panoramic-exercise-01/Data.Telecom.Phone.html)
  * [`USGov.SocialSecurityNumber`](https://cakekindel.github.io/panoramic-exercise-01/Data.USGov.SocialSecurityNumber.html)
* `Type.Row`
  * [`ExpandFields`](https://cakekindel.github.io/panoramic-exercise-01/Type.Row.ExpandFields.html)
  * [`MaybeFields`](https://cakekindel.github.io/panoramic-exercise-01/Type.Row.MaybeFields.html)

### Generated Documentation
[Generated docs are available here](https://cakekindel.github.io/panoramic-exercise-01/ACMECorp.Person.html)

Note that `purs` emits documentation for **all** modules, not just these. The relevant bits are highlighted here:

![A screenshot of the API docs with a big helpful red arrow pointing out that you should not interpret the smorgesbord of additionally compiled module documentation as work I did for this code exercise; in fact I did not write very much code at all, so it would be silly and disingenuous for me to allow you to assume that the credit is mine for all of this lovely code. If you're reading this, hello! My name is Orion and I have a penchant for mischief, as is hopefully evident by this 500 character alt text on this image, which is arguably silly and unnecessary in the first place but I have no guarantee that you, dear reader, will see the generated pursuit docs and immediately intuit which links are relevant and which are not. Okay, bye!](./note.png)
