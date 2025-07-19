#!/usr/bin/env node

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import colors from "colors";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LICENSES_DIR = path.join(__dirname, "..", "licenses");

function loadLicense(filename) {
  const filepath = path.join(LICENSES_DIR, filename);
  const content = fs.readFileSync(filepath, "utf8");

  const parts = content.split(/^---$/m);

  if (parts.length < 3) {
    throw new Error(`Invalid license file format: ${filename}`);
  }

  const metadata = yaml.load(parts[1]);

  const licenseContent = parts.slice(2).join("---");

  return {
    name: path.basename(filename, ".txt"),
    metadata,
    content: licenseContent,
  };
}

function loadAllLicenses() {
  const files = fs
    .readdirSync(LICENSES_DIR)
    .filter((file) => file.endsWith(".txt"));
  return files.map(loadLicense);
}

function listLicenses(nameFilter = "") {
  const licenses = loadAllLicenses();
  const filtered = nameFilter
    ? licenses.filter((license) =>
      license.name.toLowerCase().includes(nameFilter.toLowerCase()),
    )
    : licenses;

  if (filtered.length === 0) {
    console.error(
      nameFilter
        ? `No licenses found matching "${nameFilter}"`.red
        : "No licenses found".red,
    );
    process.exit(2);
  }

  filtered.forEach((license) => {
    console.log(`${license.name}`.yellow.bold);
    if (license.metadata.title) {
      console.log(`  ${license.metadata.title}`.green);
    }
    if (license.metadata.description) {
      console.log(
        `  ${license.metadata.description.substring(0, 100)}${license.metadata.description.length > 100 ? "..." : ""}`,
      );
    }
    console.log();
  });

  console.log(`Found ${filtered.length} license(s)`.gray);
}

function showLicenseInfo(licenseName) {
  try {
    const license = loadLicense(`${licenseName}.txt`);

    console.log(`${"License:".bold.cyan}\n${license.name.yellow}`);
    console.log(
      `\n${"Title:".bold.cyan}\n${(license.metadata.title || "N/A").white}`,
    );
    console.log(
      `\n${"SPDX ID:".bold.cyan}\n${(license.metadata["spdx-id"] || "N/A").white}`,
    );
    console.log(
      `\n${"Description:".bold.cyan}\n${(license.metadata.description || "N/A").white}`,
    );

    if (license.metadata.permissions) {
      console.log(`\nPermissions:`.cyan.bold);
      license.metadata.permissions.forEach((perm) =>
        console.log(`  - ${perm}`.green),
      );
    }

    if (license.metadata.conditions) {
      console.log(`\nConditions:`.cyan.bold);
      license.metadata.conditions.forEach((cond) =>
        console.log(`  - ${cond}`.yellow),
      );
    }

    if (license.metadata.limitations) {
      console.log(`\nLimitations:`.cyan.bold);
      license.metadata.limitations.forEach((limit) =>
        console.log(`  - ${limit}`.red),
      );
    }

    if (license.metadata.how) {
      console.log(`\nHow to use:`.cyan.bold);
      console.log(`${license.metadata.how}`.white);
    }

    console.log(
      `\n${"Website: ".bold.cyan}`,
      `\nhttps://choosealicense.com/licenses/${license.name.toLowerCase()}`
        .white,
    );
  } catch (error) {
    console.error(`License "${licenseName}" not found`.red);
    process.exit(1);
  }
}

function useLicense(licenseName, year, owner, project = "") {
  try {
    const license = loadLicense(`${licenseName}.txt`);

    let content = license.content
      .replace(/\[yyyy\]/g, year)
      .replace(/\[owner\]/g, owner);

    if (project && content.includes("[project]")) {
      content = content.replace(/\[project\]/g, project);
    }

    const outputPath = path.join(process.cwd(), "LICENSE");
    fs.writeFileSync(outputPath, content, "utf8");

    console.log(
      `Created ${"LICENSE".yellow} file using ${(license.metadata.title || licenseName).yellow}.`,
    );
    console.log(`  Year: ${year.gray}`);
    console.log(`  Owner: ${owner.gray}`);
    if (project) {
      console.log(`  Project: ${project.gray}`);
    }
    console.log(`  File: ${outputPath.gray}`);
  } catch (error) {
    console.error(`License "${licenseName}" not found`.red);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage:");
    console.log(
      "  node lib/index.js list [name]        - List all licenses or filter by name",
    );
    console.log(
      "  node lib/index.js info <name>        - Show license information",
    );
    console.log(
      "  node lib/index.js use <name> <year> <owner> [project] - Create LICENSE file",
    );
    process.exit(1);
  }

  const command = args[0];

  switch (command) {
    case "list":
      listLicenses(args[1]);
      break;

    case "info":
      if (!args[1]) {
        console.error("License name is required for info command");
        process.exit(1);
      }
      showLicenseInfo(args[1]);
      break;

    case "use":
      if (args.length < 4) {
        console.error(
          "Usage: node lib/index.js use <name> <year> <owner> [project]",
        );
        process.exit(1);
      }
      useLicense(args[1], args[2], args[3], args[4]);
      break;

    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  loadLicense,
  loadAllLicenses,
  listLicenses,
  showLicenseInfo,
  useLicense,
};
