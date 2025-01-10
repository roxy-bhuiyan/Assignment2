// Get references to DOM elements
const amountInput = document.getElementById('amountInput');
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const totalDeposit = document.getElementById('totalDeposit');
const totalWithdraw = document.getElementById('totalWithdraw');
const totalBalance = document.getElementById('totalBalance');

// Initialize values
let deposit = 0;
let withdraw = 0;
let balance = 0;

// Function to update the UI
function updateUI() {
  totalDeposit.textContent = `$${deposit.toFixed(2)}`;
  totalWithdraw.textContent = `$${withdraw.toFixed(2)}`;
  totalBalance.textContent = `$${balance.toFixed(2)}`;
}

// Function to handle Deposit
function handleDeposit() {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  deposit += amount;
  balance += amount;
  updateUI();
  amountInput.value = '';
}

// Function to handle Withdraw
function handleWithdraw() {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  if (amount > balance) {
    alert('Insufficient Balance');
    return;
  }

  withdraw += amount;
  balance -= amount;
  updateUI();
  amountInput.value = '';
}

// Add event listeners
depositButton.addEventListener('click', handleDeposit);
withdrawButton.addEventListener('click', handleWithdraw);
