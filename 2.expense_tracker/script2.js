const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
];

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

//add transaction 
function addTransaction(e) {
    e.preventDefault()
    if (text.value.trim() == "" || amount.value.trim() == "") {
        alert('Please add a Text and amount...')
    } else {
        transaction = {
            id: idGenerator(),
            text: text.value,
            // amount: amount.value     //wrong way as we need to pass in a form of number,for using "toFixed() method"
            amount: parseFloat(amount.value),  //use to pass a number
            // amount: +amount.value     //use to pass a number
        }

        transactions.push(transaction);

        addingTransactionToDOM(transaction);

        updateValues(transaction);

        updateLocalStorage();

        text.value = '';

        amount.value = '';
    }
}
//generating random id 
function idGenerator() {
    return Math.floor(Math.random() * 100000000)
}

function addingTransactionToDOM(transaction) {
    //getting sign
    const sign = (transaction.amount < 0) ? '-' : '+';
    //adding class
    const item = document.createElement('li');
    item.classList.add((transaction.amount < 0) ? 'minus' : 'plus');

    item.innerHTML = ` ${transaction.text} <span>${sign}${Math.abs(
        transaction.amount
    )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id
        })">x</button>
      `;
    //appending list to <ul>
    list.appendChild(item)
}

//updating values
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts)
    const total = amounts.reduce((acc, curr) => { return acc += curr }, 0).toFixed(3)

    // search why ".toFixed(3) is not working" as giving error as "to fixed is not a function?
    // ===> it gives error when method is called on a value that is not a number

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(3)

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, curr) => (acc += curr), 0)
        * (-1)
            .toFixed(3)

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

// remove transactions by id
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage();
    init()
}

//update local storage by transactions
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

//init app
function init() {
    list.innerHTML = "";
    transactions.forEach((elem) => {
        addingTransactionToDOM(elem)
    });
    updateValues()
}

init();

form.addEventListener('submit', addTransaction)