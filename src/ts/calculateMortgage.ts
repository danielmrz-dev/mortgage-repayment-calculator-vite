export function calculateMortgage(mortgageValue: number, interestRate: number, years: number): number {
    const monthlyInterestRate: number = interestRate / 100 / 12;
    const numberOfPayments: number = years * 12;
    const monthlyPayment: number = mortgageValue * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment;
}

export function formatNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}