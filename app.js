function Button1() {
  document.getElementById("textNumber").textContent += "1";
}

function Button2() {
  document.getElementById("textNumber").textContent += "2";
}

function Button3() {
  document.getElementById("textNumber").textContent += "3";
}

function Button4() {
  document.getElementById("textNumber").textContent += "4";
}

function Button5() {
  document.getElementById("textNumber").textContent += "5";
}

function Button6() {
  document.getElementById("textNumber").textContent += "6";
}

function Button7() {
  document.getElementById("textNumber").textContent += "7";
}

function Button8() {
  document.getElementById("textNumber").textContent += "8";
}

function Button9() {
  document.getElementById("textNumber").textContent += "9";
}

function Button0() {
  document.getElementById("textNumber").textContent += "0";
}

function ButtonAC() {
  document.getElementById("textNumber").textContent = "";
  document.getElementById("Respuestas").textContent = "";
}

function ButtonEquals() {
  let operation = document.getElementById("textNumber").textContent;
  let operationDo = eval(operation);

  if (operationDo >= 1e309) {
    document.getElementById("Respuestas").textContent =
      "Numero Demasiado Grande";
  } else {
    document.getElementById("Respuestas").textContent = operationDo;
  }
}

function ButtonAddition() {
  document.getElementById("textNumber").textContent += "+";
}

function ButtonMultiplication() {
  document.getElementById("textNumber").textContent += "*";
}

function ButtonDivision() {
  document.getElementById("textNumber").textContent += "/";
}

function ButtonSubstraction() {
  document.getElementById("textNumber").textContent += "-";
}

function ButtonElevation() {
  document.getElementById("textNumber").textContent += "**";
}

function ButtonPI() {
  document.getElementById("textNumber").textContent += "Math.PI";
}

function ButtonE() {
  document.getElementById("textNumber").textContent += "Math.E";
}

function ButtonDelete() {
  let content = document.getElementById("textNumber").textContent;
  content = content.substring(0, content.length - 1);
  document.getElementById("textNumber").textContent = content;
}
