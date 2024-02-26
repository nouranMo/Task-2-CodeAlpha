let totalBudget = document.getElementById("total_budget");
let userAmount = document.getElementById("user_amount");
const totalBudgetButton = document.getElementById("total_budget_btn");
const checkAmountButton = document.getElementById("check_amount");
const productTitle = document.getElementById("product_title");
const errorMessage = document.getElementById("budget_error");
const productTitleError = document.getElementById("product_title _error");
const productCostError = document.getElementById("");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("Balance");
const list = document.getElementById("list");
let tempAmount = 0;

//set budget part

totalBudgetButton.addEventListener("click", () => {
    tempAmount = totalBudget.value;
    //empty or negative
    if (tempAmount === "" || tempAmount < 0) {
        errorMessage.classList.remove("hide");
    }
    else {
        errorMessage.classList.add("hide");
    }
    //setBudget
    amount.innerHTML = tempAmount;
    //set Balance
    balanceValue.innerHTML = tempAmount - expenditureValue.innerText;

    //clear input
    totalBudget.value = "";
});

