import { sep } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

const esmRequire = createRequire(import.meta.url);
if (random > 0.5) {
  unknownObject = esmRequire("./files/a.json");
} else {
  unknownObject = esmRequire("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
