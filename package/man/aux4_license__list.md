#### Description

The `list` command provides a comprehensive enumeration of all license templates available through the aux4-license tool. By default, it outputs the identifiers for every license in the local database, allowing you to discover which licenses you can apply. If you supply the `--name` option, the command filters the results to include only those licenses whose names match the given substring.

#### Usage

```bash
aux4 license list [--name <license-name>]
```

--name    Optional filter to match license names or substrings. When omitted, the command lists all available licenses.

#### Example

List all licenses:

```bash
aux4 license list
```

This outputs the full list of license identifiers, for example:

```text
0bsd
afl-3.0
agpl-3.0
apache-2.0
artistic-2.0
bsd-2-clause
bsd-2-clause-patent
bsd-3-clause
bsd-3-clause-clear
bsd-4-clause
bsl-1.0
cc0-1.0
cc-by-4.0
cc-by-sa-4.0
cecill-2.1
cern-ohl-p-2.0
cern-ohl-s-2.0
cern-ohl-w-2.0
ecl-2.0
epl-1.0
epl-2.0
eupl-1.1
eupl-1.2
gfdl-1.3
gpl-2.0
gpl-3.0
isc
lgpl-2.1
lgpl-3.0
lppl-1.3c
mit
mit-0
mpl-2.0
ms-pl
ms-rl
mulanpsl-2.0
ncsa
odbl-1.0
ofl-1.1
osl-3.0
postgresql
unlicense
upl-1.0
vim
wtfpl
zlib
```

Filter licenses containing "mit":

```bash
aux4 license list --name mit
```

This prints:

```text
mit
mit-0
```