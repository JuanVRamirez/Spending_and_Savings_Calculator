const CalcButton = document.querySelector(".calculate_button");
const expensesTXT = document.querySelector(".expenses");
const enjoymentTXT = document.querySelector(".enjoyment");
const savingsTXT = document.querySelector(".savings");

CalcButton.addEventListener("click", startProgram);

const inputMoneystr = document.querySelector(".input_money");

inputMoneystr.addEventListener("input", function (e) {
    const unformattedValue = e.target.value.replace(/[^0-9]/g, "");
    const formattedValue = formatCurrency(unformattedValue);
    e.target.value = formattedValue;
});

function formatCurrency(value) {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
        return "$ " + numericValue.toLocaleString("en-US");
    } else {
        return "";
    }
}

function startProgram() {
    const inputMoneystr = document.querySelector(".input_money").value;
    const inputMoneyNum = parseFloat(inputMoneystr.replace(/\$/g, '').replace(/,/g, ''));

    if (!isNaN(inputMoneyNum)) {
        moneyCalculator();
    } else {
        alert("Please, insert a valid number");
    }
}

function moneyCalculator() {
    const inputMoneyNum = parseFloat(inputMoneystr.value.replace(/\$/g, '').replace(/,/g, ''));
    const expenses = inputMoneyNum * 0.5;
    const enjoyment = inputMoneyNum * 0.3;
    const savings = inputMoneyNum * 0.2;

    expensesTXT.innerText = formatCurrency(expenses.toFixed(2));
    enjoymentTXT.innerText = formatCurrency(enjoyment.toFixed(2));
    savingsTXT.innerText = formatCurrency(savings.toFixed(2))
}

