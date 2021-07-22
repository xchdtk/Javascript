// promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (resolve) {
      resolve("result");
    }
    if (reject) {
      reject(new Error());
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.error(e);
  });

function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "valueisfiveerror";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.error(e);
  });
