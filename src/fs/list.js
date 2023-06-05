import { access, F_OK, readdir } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");

const list = async () => {
  access(folder, F_OK, (e) => {
    if (e) {
      throw Error("FS operation failed");
    } else {
      readdir(folder, (error, files) => {
        error && console.error(error);
        console.log(files);
      });
    }
  });
};

await list();
