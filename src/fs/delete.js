import { unlink } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRemove.txt");

const remove = async () => {
  unlink(file, (error) => {
    if (error) {
      throw Error("FS operation failed");
    }
  });
};

await remove();
