import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToRead.txt");

const read = async () => {
  try {
    console.log(await readFile(file, { encoding: "utf-8", flag: "r" }));
  } catch {
    throw Error("FS operation failed");
  }
};

await read();
