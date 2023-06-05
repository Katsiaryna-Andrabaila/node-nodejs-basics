const parseArgs = () => {
  const array = [];

  const args = process.argv;

  for (let i = 0; i < args.length; i++) {
    if (args[i].slice(0, 2) === "--") {
      array.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
  }
  console.log(array.join(", "));
};

parseArgs();
