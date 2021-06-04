/* ==> LOGIN PROMISE <== */
const login = true;

const somethingLogin = () => {
  return new Promise((resolve, reject) => {
    if (login) {
      resolve("Login success ✔");
    } else {
      reject("🔥 Login fail 🔥");
    }
  });
};

somethingLogin()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

/* ==> REGISTER PROMISE <== */
const register = true;

const somethingRegister = () => {
  return new Promise((resolve, reject) => {
    if (register) {
      setTimeout(() => {
        resolve("Register success ✔");
      }, 2000); // ==> 2 seconds.
    } else {
      const error = new Error("🔥 Register fail 🔥");
      reject(error);
    }
  });
};

somethingRegister()
  /* If need more (then) use here. */
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

/* ==> RUN MANY PROMISES <== */
Promise.all([somethingLogin(), somethingRegister()])
  .then((response) => {
    console.log("Promises: ", response);
  })
  .catch((err) => {
    console.error(err);
  });
