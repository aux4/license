### List all licenses

List all available licenses without filtering:

```execute
aux4 aux4 license list
```

```expect:regex
0bsd[\s\S]*Found 47 license\(s\)
```

### Filter licenses by name

List licenses that match the filter "mit":

```execute
aux4 aux4 license list --name mit
```

```expect:regex:ignorecase
mit-0[\s\S]*mit[\s\S]*Found 2 license\(s\)
```
