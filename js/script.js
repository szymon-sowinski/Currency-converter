{
    let formButton = document.querySelector(".js-submit");

    const calculateResult = (amount, currency) => {
        const EUR = 4.3854;
        const GBP = 5.0119;
        const USD = 4.0415;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "GBP":
                return amount / GBP;

            case "USD":
                return amount / USD;
        }
    }

    const updateResult = (amount, currency, result) => {
        const formResult = document.querySelector(".js-result");
        formResult.innerHTML = `<strong>${amount} PLN </strong> po przeliczeniu: <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const formCurrency = document.querySelector(".js-currency");
        const formAmount = document.querySelector(".js-amount");

        const amount = +formAmount.value;
        const currency = formCurrency.value;

        const result = calculateResult(amount, currency);

        updateResult(amount, currency, result);
    }

    const resetFormResult = () => {
        formResult.innerHTML = "";
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resetResult = document.querySelector(".js-resetResult");

        formElement.addEventListener("submit", onFormSubmit);
        resetResult.addEventListener("submit", resetFormResult);
    }

    init();
}