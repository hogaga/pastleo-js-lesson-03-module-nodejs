const { readFile } = require('fs').promises;

const { createWriteStream } = require('fs');
// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options

const csv = require('fast-csv');
// https://c2fo.io/fast-csv/docs/introduction/example#formatting

const argJsonFilename = process.argv[2];
const argCsvFilename = process.argv[3];
if (!(argJsonFilename && argCsvFilename)) {
  console.error("Please provide json and csv filename");
  process.exit(127)
}

async function main(jsonFilename, csvFilename) {
  const jsonFileContent = await readFile(jsonFilename);
  const csvFile = createWriteStream(csvFilename);

  const posts = JSON.parse(jsonFileContent);
  const csvStream = csv.format({ headers: true });
  csvStream.pipe(csvFile);

  posts.forEach(post => {
    csvStream.write(post);
  })
  csvStream.end();
}

main(argJsonFilename, argCsvFilename);
