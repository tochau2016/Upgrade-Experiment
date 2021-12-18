i = 0;
function Test() {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  console.log(i);
}

document.getElementById("next").addEventListener("click", Test);
