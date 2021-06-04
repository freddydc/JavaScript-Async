/* ==> ASYNCHRONOUS <== */
const data = true;

const doSomeAsync = () => {
  return new Promise((resolve, reject) => {
    data
      ? setTimeout(() => resolve("✔ Success ✔"), 2000)
      : reject(new Error("🔥 Success failed 🔥"));
  });
};

/* First Run */
const firstSome = async () => {
  const message = await doSomeAsync();
  console.log(message);
};

console.log("==> First before ");
firstSome();
console.log("==> First after ");

/* Second Run */
const otherSome = async () => {
  try {
    const message = await doSomeAsync();
    console.log(message);
  } catch (err) {
    console.error(err);
  }
};

console.log("Second before <==");
otherSome();
console.log("Second after <==");
