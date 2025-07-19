### Filter licenses by name for multiple matches

```execute
aux4 aux4 license list --name mit
```

```expect:regex:ignorecase
^mit-0[\s\S]*mit[\s\S]*Found 2 license\(s\)$
```

### Filter licenses by name for no matches

```execute
aux4 aux4 license list --name no-such
```

```error:partial:ignorecase
No licenses found matching "no-such"
```
