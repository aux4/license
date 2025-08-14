#### Description

The `list` command is part of the aux4 license tool that allows you to view all available licenses. This command provides a comprehensive overview of the licenses that can be used in your projects. It can either display a full list of licenses or filter the list based on a specific license name.

#### Usage

```bash
aux4 aux4 license list [--name <license_name>]
```

The optional `--name` parameter allows you to filter the list of licenses by a specific license name. If no name is provided, it will list all available licenses.

#### Example

List all available licenses:

```bash
aux4 aux4 license list
```

This will display a list of all licenses that can be used.

List licenses with a specific name pattern:

```bash
aux4 aux4 license list --name Apache
```

This will show licenses that match the name "Apache", such as "Apache-2.0".

The output will be a list of license names or details matching the specified criteria.