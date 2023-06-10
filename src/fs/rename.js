import { rename as renameMethod } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "wrongFilename.txt");
const newFile = join(folder, "properFilename.md");

const rename = async () => {
  try {
    await renameMethod(file, newFile);
  } catch {
    throw Error("FS operation failed");
  }
};

await rename();
