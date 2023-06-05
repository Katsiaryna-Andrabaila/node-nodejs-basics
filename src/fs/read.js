import { access, F_OK, readFile } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRead.txt");

const read = async () => {
  access(file, F_OK, (e) => {
    if (e) {
      throw Error("FS operation failed");
    } else {
      readFile(file, "utf8", (error, content) => {
        error && console.error(error);
        console.log(content);
      });
    }
  });
};

await read();
