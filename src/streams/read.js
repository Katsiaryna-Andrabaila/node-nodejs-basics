import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const { stdout } = process;

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRead.txt");

const read = async () => {
  const myStream = createReadStream(file, "utf-8");
  myStream.on("data", (chunk) => stdout.write(chunk));
};

await read();
