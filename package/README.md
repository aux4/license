# aux4/license

aux4 license is a command-line tool to manage open-source licenses in your projects. It lets you list available licenses, view detailed information, and apply a license file to your repository with a single command.

## Installation

Install this package via the aux4 package manager:

```bash
aux4 pkger install aux4/license:0.0.4
```

> Note: This tool requires Node.js and npm to be installed on your system.

## Usage

After installation, the main entry point is the `aux4 license` command, which provides three subcommands:

* [aux4 license list](./commands/aux4/license/list) – List all supported licenses or filter by name.
* [aux4 license info](./commands/aux4/license/info) – Show detailed metadata about a specific license.
* [aux4 license use](./commands/aux4/license/use) – Generate and apply a license file in your project.

Run the help flag on any command to see available options:

```bash
aux4 license <command> --help
```

### Command Reference

#### aux4 license list

List all the available licenses. You can optionally filter by license name (partial or full):

```bash
# List all licenses
aux4 license list

# List licenses matching "MIT"
aux4 license list --name MIT
```

#### aux4 license info

Show detailed information (full name, SPDX identifier, text summary) for a given license:

```bash
aux4 license info --name Apache-2.0
```

#### aux4 license use

Generate a LICENSE file in the current directory based on the chosen license template. You can provide metadata such as year, owner, and project name:

```bash
aux4 license use \
  --name MIT \
  --owner "Jane Doe" \
  --project "AwesomeProject" \
  --year 2024
```

This will create or overwrite a `LICENSE` file in your working directory.

## Examples

1. Quickly list all available licenses:

   ```bash
   aux4 license list
   ```

2. Get info about the GNU GPL v3 license:

   ```bash
   aux4 license info --name GPL-3.0
   ```

3. Add the Apache 2.0 license to your project:

   ```bash
   aux4 license use --name Apache-2.0 --owner "ACME, Inc." --year 2023
   ```

## System Requirements

* Node.js (>= v12)
* npm (for installing dependencies)

## License

This project is licensed under the Apache-2.0 license. See the [LICENSE](./LICENSE) file for details.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)
