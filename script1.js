const passbook = document.getElementById('passbook');
let balance = 0;

function addTransaction(event) {
    event.preventDefault();
    
    const form = event.target;
    const type = form.type.value;
    const amount = parseFloat(form.amount.value);
    
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    
    if (type === 'credit') {
        balance += amount;
    } else if (type === 'debit') {
        if (amount > balance) {
            alert('Insufficient balance.');
            return;
        }
        balance -= amount;
    }
    
    const transaction = document.createElement('li');
    transaction.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: ${amount.toFixed(2)}, Balance: ${balance.toFixed(2)}`;
    passbook.appendChild(transaction);
    
    form.reset();
}

document.getElementById('transactionForm').addEventListener('submit', addTransaction);
