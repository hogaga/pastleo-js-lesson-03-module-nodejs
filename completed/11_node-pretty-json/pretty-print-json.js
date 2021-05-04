const fs = require('fs').promises

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

async function main(jsonFilename) {
  const jsonFileContent = await fs.readFile(jsonFilename);
  const json = JSON.parse(jsonFileContent);

  process.stdout.write(
    JSON.stringify(json, null, 2)
  )
}

main(filename);
