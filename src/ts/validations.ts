export function validateField(fieldId: string, iconId: string): boolean {
    const field: HTMLInputElement | null = document.querySelector(fieldId);
    const icon: HTMLSpanElement | null = document.querySelector(iconId);
    const errorMsg: HTMLElement | null = field
        ?.closest(".parent")
        ?.querySelector(".error-msg") as HTMLParagraphElement;
        const isValid = field?.value === "" ? false : true;
        if (!isValid) {
            field?.classList.add("error-state-input");
            icon?.classList.add("error-state-icon");
            errorMsg?.classList.add("error-msg-active");
        } else {
            field?.classList.remove("error-state-input");
            icon?.classList.remove("error-state-icon");
            errorMsg?.classList.remove("error-msg-active");
        }
        return isValid
}

export function validateMortgageType(): boolean {
    const repaymentOption: HTMLInputElement | null = document.querySelector("#mortgage-type-repayment");
    const interestOnlyOption: HTMLInputElement | null = document.querySelector("#mortgage-type-interest");
    const errorMsg: HTMLElement | null = repaymentOption?.closest(".parent")?.querySelector(".error-msg") as HTMLParagraphElement;
    const isValid = repaymentOption?.checked || interestOnlyOption?.checked ? true : false;   

    if (!repaymentOption?.checked && !interestOnlyOption?.checked) {
        errorMsg!.classList.add("error-msg-active");
    } else {
        errorMsg.classList.remove("error-msg-active");
    }
    return isValid
}