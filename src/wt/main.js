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

  for (let i = 10; i < workersAmount + 10; i++) {
    const work = (workerData) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerThread, { workerData });
        worker.on("message", resolve);
        worker.on("error", reject);
      });
    };
    await work(i).then((res) =>
      res
        ? workerThreads.push({ status: "resolved", value: res })
        : workerThreads.push({ status: "error", value: null })
    );
  }

  console.log(await Promise.all(workerThreads));
};

await performCalculations();
