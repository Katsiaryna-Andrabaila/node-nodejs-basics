import { writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), "files");
const file = join(__dirname, "fresh.txt");

const create = async () => {
  try {
    await writeFile(file, "I am fresh and young", { flag: "wx" });
  } catch {
    throw Error("FS operation failed");
  }
};

await create();
