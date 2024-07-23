import { calculateMortgage, formatNumber } from "./calculateMortgage.js";
import { validateField, validateMortgageType } from "./validations.js";

const mortgageAmount = document.querySelector("#mortgage-amount") as HTMLInputElement;
const mortgageTerm = document.querySelector("#mortgage-term") as HTMLInputElement;
const interestRate = document.querySelector("#interest-rate") as HTMLInputElement;
const mortgageTypeContainer = document.querySelector(".calculator__mortgage-type") as HTMLDivElement;
const repaymentOption = document.querySelector("#mortgage-type-repayment") as HTMLInputElement;
const interestOnlyOption = document.querySelector("#mortgage-type-interest") as HTMLInputElement;
const form: HTMLFormElement | null = document.querySelector(".calculator__form");
const emptyResults = document.querySelector(".calculator__results-empty") as HTMLDivElement;
const completeResults = document.querySelector(".calculator__results-complete") as HTMLDivElement;
const monthlyValueElement = completeResults.querySelector("#monthly-value");
const totalValueElement = completeResults.querySelector("#total-value");
const clearAllBtn = document.querySelector(".calculator__clear-btn");
const finalResultText = document.querySelector("#interest-text") as HTMLHeadingElement;

const mortgageTypeLabels = mortgageTypeContainer.querySelectorAll("label");
mortgageTypeLabels.forEach(label => {
    label.addEventListener("keydown", (key) => {
        if (key.key === "Enter" || key.key === " ") {
            const labelId = label.id;
            const container = label.parentElement;
            const input = container?.querySelector(`input#mortgage-type-${labelId}`) as HTMLInputElement;          
            input.checked = true;            
        };
    });
});

interestRate.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9,]/g, '');
});

clearAllBtn?.addEventListener("click", () => {
    
    const allActiveErrorInputs = document.querySelectorAll(".error-state-input");
    allActiveErrorInputs.forEach(input => input.classList.remove("error-state-input"));
    
    const allIconsError = document.querySelectorAll(".error-state-icon");
    allIconsError.forEach(icon => icon.classList.remove("error-state-icon"));
    
    const allErrorMessages = document.querySelectorAll(".error-msg-active");
    allErrorMessages.forEach(message => message.classList.remove("error-msg-active"));

    mortgageAmount.value = "";
    mortgageTerm.value = "";
    interestRate.value = "";
    repaymentOption.checked = false;
    interestOnlyOption.checked = false;

    completeResults.classList.remove("show-results");
    emptyResults.classList.remove("hide-empty-results");    
})

if (form) {
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const isMortgageAmountValid: boolean = validateField("#mortgage-amount", ".currency-icon");
        const isMortgageTermValid: boolean = validateField("#mortgage-term", ".years-icon");
        const isInterestRateValid: boolean = validateField("#interest-rate", ".percentage-icon");
        const isMortgageTypeValid: boolean = validateMortgageType();

        const numberMortgageAmount = parseFloat(mortgageAmount.value);
        const numberInterestRate = parseFloat(interestRate.value.replace(",", "."));
        const numberMortgageTerm = parseFloat(mortgageTerm.value);
        
        if (isMortgageAmountValid && isMortgageTermValid && isInterestRateValid && isMortgageTypeValid) {
            let monthlyPayment =  calculateMortgage(numberMortgageAmount, numberInterestRate, numberMortgageTerm);
            let totalValue = ((monthlyPayment * 12) * Number(mortgageTerm.value));
            let interestOnlyValue = ((monthlyPayment * 12) * Number(mortgageTerm.value)) - Number(mortgageAmount.value);

            let monthlyPaymentFormatted = formatNumber(monthlyPayment);
            let totalValueFormatted = formatNumber(totalValue);
            let interestOnlyValueFormatted = formatNumber(interestOnlyValue);

            emptyResults.classList.add("hide-empty-results");
            completeResults.classList.add("show-results");
            
            if (repaymentOption.checked) {
                monthlyPayment = monthlyPayment;
                monthlyValueElement!.innerHTML = `£ ${monthlyPaymentFormatted}`;
                totalValueElement!.innerHTML = `£ ${totalValueFormatted}`;
                finalResultText.textContent = "Total you'll repay over the term";
            } else if (interestOnlyOption.checked) {
                monthlyPayment = monthlyPayment;
                monthlyValueElement!.innerHTML = `£ ${monthlyPaymentFormatted}`;
                totalValueElement!.innerHTML = `£ ${interestOnlyValueFormatted}`;
                finalResultText.textContent = "Total of interest you'll pay over the term";
            }

        } else {
            emptyResults.classList.remove("results-showing");
            completeResults.classList.remove("show-results");
        }
    });
}
