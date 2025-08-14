### Display information for an existing license

Fetch and display details for the MIT license:

```execute
aux4 aux4 license info --name mit
```

```expect:regex:ignorecase
License:\nmit\n\nTitle:\nMIT License[\s\S]*SPDX ID:\nMIT[\s\S]*Permissions:[\s\S]*Conditions:[\s\S]*Limitations:[\s\S]*How to use:[\s\S]*Website:[\s\S]*licenses/mit
```

### Handle unknown license name

Expect an error when querying a non-existent license:

```execute
aux4 aux4 license info --name no-such-license
```

```error:ignorecase:partial
License "no-such-license" not found
```