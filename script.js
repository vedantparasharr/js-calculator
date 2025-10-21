let calculation = localStorage.getItem('calculation') || '';
display();

function display() {
    document.querySelector('.display-calculate').innerHTML = `${calculation}`;
}

function updateCalculation(value) {
    calculation += value;
    display();
    localStorage.setItem('calculation', calculation);
}