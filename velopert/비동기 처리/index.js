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
