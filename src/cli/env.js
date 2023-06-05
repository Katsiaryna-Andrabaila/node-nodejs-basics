const parseEnv = () => {
  const keys = Object.keys(process.env).filter((item) => item.includes("RSS_"));
  keys.forEach((el) => console.log(`${el}=${process.env[el]}`));
};

parseEnv();
