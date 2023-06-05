import { access, F_OK, rename } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "wrongFilename.txt");
const newFile = join(folder, "properFilename.txt");

const renameFunc = async () => {
  access(newFile, F_OK, (e) => {
    if (e) {
      access(file, F_OK, (err) => {
        if (err) {
          throw Error("FS operation failed");
        } else {
          rename(file, newFile, (error) => error && console.error(error));
        }
      });
    } else {
      throw Error("FS operation failed");
    }
  });
};

await renameFunc();
