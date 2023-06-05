import { access, F_OK, unlink } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRemove.txt");

const remove = async () => {
  access(file, F_OK, (e) => {
    if (e) {
      throw Error("FS operation failed");
    } else {
      unlink(file, (error) => error && console.error(error));
    }
  });
};

await remove();
