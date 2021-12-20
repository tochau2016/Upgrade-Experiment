// i = 0;
// function Test() {
//   if (i < 4) {
//     i++;
//   } else {
//     i = 0;
//   }
//   console.log(i);
// }

// document.getElementById("next").addEventListener("click", Test);

let testBtn = document.querySelectorAll("thumbnail");

// function testSth() {
//   if (this === document.activeElement) {
//     console.log("Button has been focus");
//   } else {
//     console.log("Nothing");
//   }
// }

testBtn.forEach((item) => {});

testBtn.forEach((e) => e.addEventListener("click", testSth));
