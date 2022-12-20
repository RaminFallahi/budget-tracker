//1-total amount input box
let totalAmount = document.getElementById("total-amount");
//2-user amount input box
let userAmount = document.getElementById("user-amount");
//3-set amount/expenses button
const checkAmountButton = document.getElementById("check-amount");
//4-set budget button
const totalAmountButton = document.getElementById("total-amount-button");
//5-product title input box
const productTitle = document.getElementById("product-title");
//6-error message for budget
const errorMessage = document.getElementById("budget-error");
//7-error message for product title
const productTitleError = document.getElementById("product-title-error");
//8-error message for product cost
const productCostError = document.getElementById("product-cost-error");
//9-Total Budget output amount id
const amount = document.getElementById("amount");
//10-Expenses output expenditure-value id
const expenditureValue = document.getElementById("expenditure-value");
//11-Balance output balance-amount id
const balanceValue = document.getElementById("balance-amount");
//12-Expense List part List id
const list = document.getElementById("list");
//13-Variable to store temporary amount
let tempAmount = 0;


//14-Set Budget Part
totalAmountButton.addEventListener("click", () => {
  totalAmount = totalAmount.nodeValue;
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    //Set Budget
    amount.innerHTML = tempAmount;
    //Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    //Clear Input Box
    totalAmount.value = "";
  }
})
 


