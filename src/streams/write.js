import { createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const { stdin } = process;

const path = fileURLToPath(import.meta.url);
const folder = join(dirname(path), "files");
const file = join(folder, "fileToWrite.txt");

const write = async () => {
  const myStream = createWriteStream(file, "utf-8");
  stdin.on("data", (data) => myStream.write(data));
};

await write();
