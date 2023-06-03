import { access, F_OK, readdir, copyFile, mkdir } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const newFolder = join(dirname(path), "files_copy");

const copy = async () => {
  access(folder, F_OK, (e) => {
    if (e) {
      throw Error("FS operation failed");
    } else {
      access(newFolder, F_OK, (err) => {
        if (err) {
          mkdir(newFolder, (error) => {
            if (error) throw error;
            copyFolder();
          });
        } else {
          throw Error("FS operation failed");
        }
      });
    }
  });
};

function copyFolder() {
  readdir(folder, (e, files) => {
    if (e) throw error;
    for (const file of files) {
      copyFile(join(folder, file), join(newFolder, file), (error) => {
        if (error) throw error;
      });
    }
  });
}

await copy();
