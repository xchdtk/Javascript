function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    callback(end - start);
  }, 0);
}

console.log("작업 시작");
work((ms) => {
  console.log("작업이 끝났어요");
  console.log(ms + "ms 걸렸다고 해요");
});
console.log("다음 작업");

// 콜백지옥
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("작업 끝");
        });
      });
    });
  });
});

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

// async await
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

async function process() {
  console.log("안녕하세요");
  await sleep(1000);
  console.log("반갑습니다.");
  return true;
}

process().then((value) => {
  console.log(value);
});
