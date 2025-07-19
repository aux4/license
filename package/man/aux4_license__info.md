#### Description

The `info` command displays comprehensive metadata about a specific license available in the built-in license repository. It loads the license definition file and prints key details such as the title, SPDX identifier, full description, permissions, conditions, limitations, usage instructions, and a link to the official license page.

This command helps you quickly inspect the terms and requirements of an open-source license before choosing or applying it to your project.

#### Usage

```bash
aux4 license info --name <license-name>
```

- `<license-name>`: The identifier of the license you want to inspect (e.g., `mit`, `apache-2.0`, `gpl-3.0`).

#### Example

Fetch and display details for the MIT license:

```bash
aux4 license info --name mit
```

This command outputs the following information:

```text
License:
mit

Title:
MIT License

SPDX ID:
MIT

Description:
A short and simple permissive license with conditions only requiring preservation of copyright and license notices.

Permissions:
  - commercial-use
  - modifications
  - distribution
  - private-use

Conditions:
  - include-copyright

Limitations:
  - liability
  - warranty

How to use:
Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [yyyy] with the current year and [owner] with the name (or names) of the copyright holders.

Website:
https://choosealicense.com/licenses/mit
```