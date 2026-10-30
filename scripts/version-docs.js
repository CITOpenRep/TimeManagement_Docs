const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const version = process.argv[2];

if (!version) {
  console.error('Usage: npm run docs:version <version>');
  process.exit(1);
}

execSync(`npx docusaurus docs:version ${version}`, { stdio: 'inherit' });

const i18nDir = path.join(__dirname, '..', 'i18n');

if (fs.existsSync(i18nDir)) {
  const locales = fs.readdirSync(i18nDir);

  for (const locale of locales) {
    const docsPluginDir = path.join(i18nDir, locale, 'docusaurus-plugin-content-docs');
    const versionFile = path.join(docsPluginDir, `version-${version}.json`);

    if (fs.existsSync(versionFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(versionFile, 'utf8'));

        data['version.label'] = {
          message: version,
          description: `The label for version ${version}`
        };

        fs.writeFileSync(versionFile, JSON.stringify(data, null, 2) + '\n');
        console.log(`[i18n] Updated version.label in ${path.relative(path.join(__dirname, '..'), versionFile)} to "${version}"`);
      } catch (err) {
        console.error(`Failed to update ${versionFile}:`, err.message);
      }
    }
  }
}
