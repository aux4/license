#### Description

The `use` command applies a specific license template to your project by loading the chosen license file, replacing placeholder fields (`[yyyy]`, `[owner]`, and, if supported, `[project]`) with the supplied values, and writing the result to a `LICENSE` file in the current working directory. Once complete, it prints a confirmation message that includes the license title, the year, owner, optional project name, and the path to the generated file.

#### Usage

```bash
aux4 license use --name <license> --year <year> --owner <owner> [--project <project>]
```

- `--name <license>`   The identifier of the license template to use (e.g., `mit`, `apache-2.0`).
- `--year <year>`       The year to insert into the license (replacing `[yyyy]`).
- `--owner <owner>`     The owner name to insert (replacing `[owner]`).
- `--project <project>` Optional project name to insert (replacing `[project]` if the template supports it).

#### Example

```bash
aux4 license use --name mit --year 2023 --owner "Alice" --project "MyApp"
```

This command generates a `LICENSE` file in the current directory using the MIT license template, replacing the year placeholder with `2023`, the owner placeholder with `Alice`, and the project placeholder with `MyApp`.

```text
Created LICENSE file using MIT License.
  Year: 2023
  Owner: Alice
  Project: MyApp
  File: /path/to/your/project/LICENSE
```