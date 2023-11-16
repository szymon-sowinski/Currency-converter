{
    const calculateResult = (amount, currency) => {
        const EUR = 4.3854;
        const GBP = 5.0119;
        const USD = 4.0415;
        const CHF = 4.5452;
        const CZK = 0.1793;
        const CAD = 2.9506;
        const AUD = 2.6256;
        const JPY = 2.6714;
        const DKK = 0.5879;
        const ISK = 2.8607;
        const MXN = 0.2341;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "GBP":
                return amount / GBP;

            case "USD":
                return amount / USD;

            case "CHF":
                return amount / CHF;

            case "CZK":
                return amount / CZK;

            case "CAD":
                return amount / CAD;

            case "AUD":
                return amount / AUD;

            case "JPY":
                return amount / JPY;

            case "DKK":
                return amount / DKK;

            case "ISK":
                return amount / ISK;

            case "MXN":
                return amount / MXN;
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