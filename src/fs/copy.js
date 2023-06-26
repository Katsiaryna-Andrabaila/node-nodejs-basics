import { copyFile, constants, readdir, mkdir, access } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const newFolder = join(dirname(path), "files_copy");

const copy = async () => {
  try {
    await access(folder, constants.R_OK | constants.W_OK);
    await mkdir(newFolder);
    const files = await readdir(folder);
    for (const file of files) {
      await copyFile(
        join(folder, file),
        join(newFolder, file),
        constants.COPYFILE_EXCL
      );
    }
  } catch {
    throw Error("FS operation failed");
  }
};

await copy();
