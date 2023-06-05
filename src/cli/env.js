const parseEnv = () => {
  const array = [];
  const keys = Object.keys(process.env).filter((item) => item.includes("RSS_"));
  keys.forEach((el) => array.push(`${el}=${process.env[el]}`));
  console.log(array.join("; "));
};

parseEnv();
