const fs = require('fs');
const path = require('path');

const projectPath = path.join(__dirname, '..', 'project', 'mod.json');

try {
  const mod = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
  console.log(`Loaded mod: ${mod.name} v${mod.version}`);
  console.log(`Author: ${mod.author}`);
  console.log(`Entry: ${mod.entry}`);
} catch (error) {
  console.error(`Could not load mod.json: ${error.message}`);
  process.exit(1);
}
