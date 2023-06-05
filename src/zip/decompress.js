import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToCompress.txt");
const archive = join(folder, "archive.gz");

const decompress = async () => {
  const gzip = createUnzip();
  const input = createReadStream(archive);
  const output = createWriteStream(file, "utf-8");

  input.pipe(gzip).pipe(output);
};

await decompress();
