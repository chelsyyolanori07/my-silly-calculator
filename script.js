function appendValue(value) {
  let resultField = document.getElementById("result");
  resultField.value += value;
  formatNumber();
}

function formatNumber() {
  let resultField = document.getElementById("result");
  let value = resultField.value.replace(/,/g, "");

  if (!isNaN(value) && value !== "") {
    resultField.value = Number(value).toLocaleString("en");
  }
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let resultField = document.getElementById("result");
  resultField.value = resultField.value.slice(0, -1);
  formatNumber();
}

function calculateResult() {
  try {
    let resultField = document.getElementById("result");
    let expression = resultField.value.replace(/,/g, "");
    let result = eval(expression);
    resultField.value = result.toLocaleString("en");
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
