
let formElement = document.querySelector(".js-form");
let formCurrency = document.querySelector(".js-currency");
let formAmount = document.querySelector(".js-amount");
let formResult = document.querySelector(".js-result");
let resetResult = document.querySelector(".js-resetResult");
let formButton = document.querySelector(".js-submit");

//currency's amount declaration
let EUR = 4.67;
let GBP = 5.32;
let USD = 4.29;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result = formAmount.value;
    let currency = formCurrency.value;

    switch (currency) {
        case "EUR":
            result /= EUR;
            break;
        case "GBP":
            result /= GBP;
            break;
        case "USD":
            result /= USD;
            break;
    }

    formResult.innerHTML = `<strong>${formAmount.value} PLN </strong> po przeliczeniu: <strong>${result.toFixed(2)} ${formCurrency.value}</strong>`
})

formResult.addEventListener("click", () => {
    result.innerHTML = " ";
})

resetResult.addEventListener("click", () => {
    formResult.innerHTML = "";
})
