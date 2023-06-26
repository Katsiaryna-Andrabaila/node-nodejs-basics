import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToCompress.txt");
const archive = join(folder, "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const input = createReadStream(file, "utf-8");
  const output = createWriteStream(archive);

  input.pipe(gzip).pipe(output);
};

await compress();
