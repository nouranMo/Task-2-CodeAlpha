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

//Function to Disable Edit and Delete

const disableButtons = (bool) => {
    let editButoon = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach(element => {
        element.disabled = bool;
    });
}

//Function to Modify list Elements 
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpenses = expenditureValue.innerText
    let parentAmount = parentDiv.querySelector(".amount").innerText
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableButtons(true);
    }

    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText = parseInt(currentExpenses) - parseInt(parentAmount);
    parentDiv.remove();
}

//Function Create List

const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p> <p class="amount">${expenseValue} </p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid" ,"fa-pen-to-square","edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click",()=>{
        modifyElement(editButton,true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid","fa-trash","delete");
    deleteButton.style.fontSize = "24px";
    deleteButton.addEventListener("click",()=>{
        modifyElement(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(sublistContent);
}