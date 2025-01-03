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
to host a browsable output hosted on [Github pages](https://cakekindel.github.io/panoramic-exercise-01/ACMECorp.Person.html)

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
