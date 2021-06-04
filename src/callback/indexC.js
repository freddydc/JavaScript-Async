/* ==> CALCULATOR <== */
function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function calc(dataOne, dataTwo, callBack) {
  return callBack(dataOne, dataTwo);
}

console.log(calc(12, 6, sum)); // Run.

/* ==> SAMPLE <== */
function question(callBack) {
  let result = "✔ Sending ✔";
  callBack(result);
}
function printQuestion(getResult) {
  console.log(getResult);
}

question(printQuestion); // Run.

/* ==> DATE <== */
function date(callBack) {
  console.log(`Start ==> ${new Date()} ✔`);
  setTimeout(function () {
    let date = new Date();
    callBack(date);
  }, 2000); // 2 seconds.
}
function printDate(getDate) {
  console.log(`End ==> ${getDate} ✔`);
}

date(printDate); // Run.
