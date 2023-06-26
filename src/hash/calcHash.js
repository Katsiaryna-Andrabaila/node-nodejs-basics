import { createHash } from "node:crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const content = await readFile(file);
    const hash = createHash("sha256").update(content).digest("hex");
    console.log(hash);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
