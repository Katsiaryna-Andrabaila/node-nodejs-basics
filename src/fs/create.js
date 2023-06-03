import { writeFile, access, F_OK } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), "files");
const file = join(__dirname, "fresh.txt");

const create = async () => {
  access(file, F_OK, (e) => {
    if (e) {
      writeFile(
        file,
        "I am fresh and young",
        (err) => err && console.error(err)
      );
    } else {
      throw Error("FS operation failed");
    }
  });
};

await create();
