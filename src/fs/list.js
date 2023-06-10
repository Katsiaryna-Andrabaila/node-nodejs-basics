import { readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");

const list = async () => {
  try {
    console.log(await readdir(folder));
  } catch {
    throw Error("FS operation failed");
  }
};

await list();
