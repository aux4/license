### Display information for an existing license

Fetch and display details for the MIT license:

```execute
aux4 aux4 license info --name mit
```

```expect:regex:ignorecase
License:\nmit\n\nTitle:\nMIT License[\s\S]*SPDX ID:\nMIT[\s\S]*Permissions:[\s\S]*Conditions:[\s\S]*Limitations:[\s\S]*How to use:[\s\S]*Website:[\s\S]*licenses/mit
```

### Display license information in JSON format

Fetch and display MIT license details in JSON format:

```execute
aux4 aux4 license info --name mit --json
```

```expect:regex
\{\s*"name":\s*"mit",\s*"title":\s*"MIT License",\s*"spdxId":\s*"MIT",\s*"description":\s*".*",\s*"permissions":\s*\[[\s\S]*\],\s*"conditions":\s*\[[\s\S]*\],\s*"limitations":\s*\[[\s\S]*\],\s*"how":\s*".*",\s*"website":\s*".*licenses/mit"\s*\}
```

### Handle unknown license name

Expect an error when querying a non-existent license:

```execute
aux4 aux4 license info --name no-such-license
```

```error:ignorecase:partial
License "no-such-license" not found
```