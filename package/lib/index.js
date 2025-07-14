#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Path to licenses directory
const LICENSES_DIR = path.join(__dirname, '..', 'licenses');

/**
 * Load a license file and parse its metadata and content
 */
function loadLicense(filename) {
  const filepath = path.join(LICENSES_DIR, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Split by --- to separate YAML front matter from license content
  const parts = content.split(/^---$/m);
  
  if (parts.length < 3) {
    throw new Error(`Invalid license file format: ${filename}`);
  }
  
  // Parse YAML metadata (between first and second ---)
  const metadata = yaml.load(parts[1]);
  
  // License content (after second ---)
  const licenseContent = parts.slice(2).join('---').trim();
  
  return {
    name: path.basename(filename, '.txt'),
    metadata,
    content: licenseContent
  };
}

/**
 * Load all licenses from the licenses directory
 */
function loadAllLicenses() {
  const files = fs.readdirSync(LICENSES_DIR).filter(file => file.endsWith('.txt'));
  return files.map(loadLicense);
}

/**
 * List licenses, optionally filtered by name
 */
function listLicenses(nameFilter = '') {
  const licenses = loadAllLicenses();
  const filtered = nameFilter 
    ? licenses.filter(license => license.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : licenses;
  
  if (filtered.length === 0) {
    console.log(nameFilter ? `No licenses found matching "${nameFilter}"` : 'No licenses found');
    return;
  }
  
  console.log(`Found ${filtered.length} license(s):\n`);
  filtered.forEach(license => {
    console.log(`${license.name}`);
    if (license.metadata.title) {
      console.log(`  ${license.metadata.title}`);
    }
    if (license.metadata.description) {
      console.log(`  ${license.metadata.description.substring(0, 100)}${license.metadata.description.length > 100 ? '...' : ''}`);
    }
    console.log();
  });
}

/**
 * Show detailed information about a specific license
 */
function showLicenseInfo(licenseName) {
  try {
    const license = loadLicense(`${licenseName}.txt`);
    
    console.log(`License: ${license.name}`);
    console.log(`Title: ${license.metadata.title || 'N/A'}`);
    console.log(`SPDX ID: ${license.metadata['spdx-id'] || 'N/A'}`);
    console.log(`Description: ${license.metadata.description || 'N/A'}`);
    
    if (license.metadata.permissions) {
      console.log(`\nPermissions:`);
      license.metadata.permissions.forEach(perm => console.log(`  - ${perm}`));
    }
    
    if (license.metadata.conditions) {
      console.log(`\nConditions:`);
      license.metadata.conditions.forEach(cond => console.log(`  - ${cond}`));
    }
    
    if (license.metadata.limitations) {
      console.log(`\nLimitations:`);
      license.metadata.limitations.forEach(limit => console.log(`  - ${limit}`));
    }
    
    if (license.metadata.how) {
      console.log(`\nHow to use:`);
      console.log(`  ${license.metadata.how}`);
    }
    
  } catch (error) {
    console.error(`License "${licenseName}" not found`);
    process.exit(1);
  }
}

/**
 * Create a LICENSE file with replaced placeholders
 */
function useLicense(licenseName, year, owner, project = '') {
  try {
    const license = loadLicense(`${licenseName}.txt`);
    
    let content = license.content
      .replace(/\[yyyy\]/g, year)
      .replace(/\[owner\]/g, owner);
    
    // Replace [project] if provided and present in the license
    if (project && content.includes('[project]')) {
      content = content.replace(/\[project\]/g, project);
    }
    
    // Write LICENSE file to current directory
    const outputPath = path.join(process.cwd(), 'LICENSE');
    fs.writeFileSync(outputPath, content, 'utf8');
    
    console.log(`Created LICENSE file using ${license.metadata.title || licenseName} license`);
    console.log(`  Year: ${year}`);
    console.log(`  Owner: ${owner}`);
    if (project) {
      console.log(`  Project: ${project}`);
    }
    console.log(`  File: ${outputPath}`);
    
  } catch (error) {
    console.error(`License "${licenseName}" not found`);
    process.exit(1);
  }
}

/**
 * Main CLI handler
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage:');
    console.log('  node lib/index.js list [name]        - List all licenses or filter by name');
    console.log('  node lib/index.js info <name>        - Show license information');
    console.log('  node lib/index.js use <name> <year> <owner> [project] - Create LICENSE file');
    process.exit(1);
  }
  
  const command = args[0];
  
  switch (command) {
    case 'list':
      listLicenses(args[1]);
      break;
      
    case 'info':
      if (!args[1]) {
        console.error('License name is required for info command');
        process.exit(1);
      }
      showLicenseInfo(args[1]);
      break;
      
    case 'use':
      if (args.length < 4) {
        console.error('Usage: node lib/index.js use <name> <year> <owner> [project]');
        process.exit(1);
      }
      useLicense(args[1], args[2], args[3], args[4]);
      break;
      
    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
}

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  loadLicense,
  loadAllLicenses,
  listLicenses,
  showLicenseInfo,
  useLicense
};