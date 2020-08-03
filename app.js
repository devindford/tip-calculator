let container = document.querySelector("#container");

container.addEventListener("input", update);

function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return "$ " + value;
}

function formatPersons(value) {
  if (value === "1") {
    return value + " Person";
  } else {
    return value + " People";
  }
}

function update() {
  let billString = document.querySelector("#yourBill").value;
  let bill = Number(billString);
  let tipPercent = document.querySelector("#tipInput").value;
  let split = document.querySelector("#splitInput").value;
  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let total = tipValue + bill;
  let newBillEach = (bill + tipValue) / split;
  let newTipEach = tipValue / split;
  document.querySelector("#tipPercent").innerHTML = tipPercent + "%";
  document.querySelector("#tipValue").innerHTML = formatMoney(tipValue);
  document.querySelector("#totalWithTip").innerHTML = formatMoney(total);
  document.querySelector("#splitValue").innerHTML = formatPersons(split);
  document.querySelector("#billEach").innerHTML = formatMoney(newBillEach);
  document.querySelector("#tipEach").innerHTML = formatMoney(newTipEach);
}
