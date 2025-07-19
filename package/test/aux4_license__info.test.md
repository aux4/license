### Display information for an existing license

```execute
aux4 aux4 license info --name mit
```

```expect:regex:ignorecase
License:\s*mit[\s\S]*Title:\s*MIT License[\s\S]*SPDX ID:\s*MIT[\s\S]*Description:[\s\S]*Permissions:[\s\S]*Conditions:[\s\S]*Limitations:[\s\S]*How to use:[\s\S]*Website:[\s\S]*https://choosealicense\.com/licenses/mit
```

### Handle unknown license name

```execute
aux4 aux4 license info --name no-such-license
```

```error:ignorecase:partial
License "no-such-license" not found
```