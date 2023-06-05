import { Transform } from "stream";

const { stdin, stdout } = process;

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding = "utf-8", cb) {
      this.push(chunk.toString().split("").reverse().join("") + "\n\n");
      cb();
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

await transform();
