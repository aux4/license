# aux4/license

aux4 license tool

The aux4 license tool enables you to easily manage open-source licenses within your projects. With this package, you can:

- List all available licenses or filter by name
- Retrieve detailed information about a specific license (with optional JSON output)
- Generate and apply a license file for your project

This tool integrates seamlessly with the aux4 ecosystem.

## Installation

```bash
aux4 aux4 pkger install aux4/license
```

## System Dependencies

This package requires Node.js and npm, which will be handled automatically by aux4 system installers. The following installers may be used:

- brew
- pkgx
- apt
- apk
- dnf

For more details about system installers, see [system-installer](/r/public/packages/aux4/pkger/commands/aux4/pkger/system).

## Quick Start

List all available licenses:

```bash
aux4 aux4 license list
```

Generate a license file for your project:

```bash
aux4 aux4 license use MIT --project my-app --owner "Alice" --year 2024
```

## Usage

The `license` command group provides three primary commands:

### Main Commands

- [`aux4 aux4 license list [name]`](./commands/aux4/license/list) - List all available licenses or filter by a partial name match
- [`aux4 aux4 license info <name> [--json]`](./commands/aux4/license/info) - Show detailed information about a specific license
- [`aux4 aux4 license use <name> --project <project> --owner <owner> --year <year>`](./commands/aux4/license/use) - Generate a LICENSE file for your project

### Command Reference

#### list

List all licenses, or only those matching a given name.

Usage:

```bash
aux4 aux4 license list [name]
```

Variables:

- `name` (optional, positional): Filter licenses by name (e.g., `MIT`, `Apache-2.0`).

#### info

Show detailed information about a specific license.

Usage:

```bash
aux4 aux4 license info <name> [--json]
```

Variables:

- `name` (required, positional): The exact license identifier (e.g., `MIT`, `GPL-3.0`).
- `json` (optional): Output information in JSON format instead of formatted text (default: false).

#### use

Generate a LICENSE file populated with your project details.

Usage:

```bash
aux4 aux4 license use <name> --project <project> --owner <owner> --year <year>
```

Variables:

- `name` (required, positional): License identifier to apply (e.g., `MIT`, `Apache-2.0`).
- `project` (optional): The name of your project (default: none).
- `owner` (optional): The copyright holder or organization (default: none).
- `year` (optional): Year to attribute in the license (default: current year).

## Examples

### Basic Usage

List every available license:

```bash
aux4 aux4 license list
```

Filter licenses by name:

```bash
aux4 aux4 license list BSD
```

### Advanced Usage

Get details on the Apache 2.0 license:

```bash
aux4 aux4 license info Apache-2.0
```

Get license information in JSON format for programmatic use:

```bash
aux4 aux4 license info MIT --json
```

Apply the MIT license to a new project:

```bash
aux4 aux4 license use MIT --project my-app --owner "Alice" --year 2024
```

### Real-world Scenario

```bash
# Initialize a new repository
mkdir cool-project && cd cool-project

# Apply Apache-2.0 license with organization and year
aux4 aux4 license use Apache-2.0 --project cool-project --owner "Acme Corp" --year 2023
```

## Configuration

No additional configuration is required for this package.

## License

This package is licensed under the Apache-2.0 License.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./license)
