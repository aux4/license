# aux4/license

aux4 license tool – list, inspect, and apply open-source licenses to your projects.

## Installation

Install this package via the aux4 package manager:

```bash
aux4 aux4 pkger install aux4/license
```

## Usage

All commands are available under the `aux4 license` namespace. You can explore detailed help for each command using `--help`.

- [aux4 license list](./commands/aux4/license/list) – List all available licenses, optionally filtering by name.
- [aux4 license info](./commands/aux4/license/info) – Show metadata and full text for a specific license.
- [aux4 license use](./commands/aux4/license/use) – Generate a `LICENSE` file for your project based on a chosen license.

### Command Syntax

```bash
aux4 license <command> [--<variable> <value>]
```

For nested profiles (none in this package), you would prefix with profile names, but here all commands live under the `aux4 license` profile.

## Commands & Examples

### 1. List Licenses

List all available licenses. You can also filter by license name.

```bash
# List every license
aux4 license list

# Filter by keyword (e.g., mit)
aux4 license list --name mit
```

### 2. Show License Information

Display human-readable details and the full text of a specific license.

```bash
aux4 license info --name apache-2.0
```

### 3. Generate a LICENSE File

Create a `LICENSE` file in your current directory, populating placeholders like project name, owner, and year.

```bash
aux4 license use \
  --name mit \
  --owner "Alice Doe" \
  --year 2023 \
  --project "my-awesome-project"
```

This will generate a `LICENSE` file in your working directory based on the MIT license template.

## License

This project is licensed under the Apache-2.0 License. See [LICENSE](./LICENSE) for details.

[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)
