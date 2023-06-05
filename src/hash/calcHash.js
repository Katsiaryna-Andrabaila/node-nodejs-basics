import { createHash } from "node:crypto";
import { readFile } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  readFile(file, "utf8", (error, content) => {
    error && console.error(error);
    const hash = createHash("sha256").update(content).digest("hex");
    console.log(hash);
  });
};

await calculateHash();
