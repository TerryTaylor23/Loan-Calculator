document.getElementById('calcbtn').addEventListener('click', calculateLoan);

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interest").value);
    const durationTerm = parseFloat(document.getElementById("duration").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(durationTerm)) {
        alert("Please enter valid numbers for all fields");
        return; // Exit the function if inputs are invalid
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = durationTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;
    const totalAmountPaid = loanAmount + totalInterest; // Total amount paid including interest

    displayResult(monthlyPayment, totalInterest, totalPayments, totalAmountPaid);
}

function displayResult(monthlyPayment, totalInterest, totalPayments, totalAmountPaid) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Total Number of Payments =  ${totalPayments}</strong></p>
        <p><strong>Monthly Payment = ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest Paid = ${totalInterest.toFixed(2)}</strong></p>
        <p><strong>Total Amount Paid = ${totalAmountPaid.toFixed(2)}</strong></p>
    `;
}
