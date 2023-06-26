import { unlink } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRemove.txt");

const remove = async () => {
  try {
    await unlink(file);
  } catch {
    throw Error("FS operation failed");
  }
};

await remove();
