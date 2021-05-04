const { readFile } = require('fs').promises; // fs 讀寫功能

const { createWriteStream } = require('fs');
// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options

const csv = require('fast-csv'); // 取得 fast-csv 套件
// https://c2fo.io/fast-csv/docs/introduction/example#formatting

const argJsonFilename = process.argv[2];
const argCsvFilename = process.argv[3];
if (!(argJsonFilename && argCsvFilename)) {
  console.error("Please provide json and csv filename");
  process.exit(127)
}

async function main(jsonFilename, csvFilename) {
  const jsonContent = await readFile(jsonFilename, { encoding: 'utf8' })
  const json = JSON.parse(jsonContent)

  const csvStream = csv.format({ headers: true });
  const fileStream = createWriteStream(csvFilename);

  csvStream.pipe(fileStream).on('end', () => process.exit());

  json.forEach(post => {
    csvStream.write(post);
  })
  csvStream.end();
}

main(argJsonFilename, argCsvFilename);
