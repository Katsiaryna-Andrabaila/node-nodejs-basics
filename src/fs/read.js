import { readFile } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRead.txt");

const read = async () => {
  readFile(file, "utf8", (error, content) => {
    if (error) {
      throw Error("FS operation failed");
    }
    console.log(content);
  });
};

await read();
