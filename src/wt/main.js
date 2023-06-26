import { Worker } from "worker_threads";
import { availableParallelism } from "os";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const path = fileURLToPath(import.meta.url);
const workerThread = join(dirname(path), "worker.js");

const workersAmount = availableParallelism();

const performCalculations = async () => {
  const workerThreads = [];

  const work = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerThread, { workerData });
      worker.on("message", (res) =>
        resolve({ status: "resolved", value: res })
      );
      worker.on("error", () => resolve({ status: "error", value: null }));
    });
  };

  for (let i = 10; i < workersAmount + 10; i++) {
    await work(i).then((res) => workerThreads.push(res));
  }

  console.log(await Promise.all(workerThreads));
};

await performCalculations();
