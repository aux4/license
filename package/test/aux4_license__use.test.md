### Use license

```afterAll
rm -f LICENSE
```

```execute
aux4 aux4 license use --name mit --year 2023 --owner Alice --project test
```

```expect:regex
Created LICENSE file using MIT License.
  Year: 2023
  Owner: Alice
  Project: test
  File: .+/LICENSE
```

#### Verify the generated LICENSE file replaces year and owner:

```execute
cat LICENSE
```

```expect:partial
2023
```

```expect:partial
Alice
```
