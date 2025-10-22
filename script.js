//load and render calculation
let calculation = localStorage.getItem('calculation') || '';
display();

//display function
function display() {
    const displayElement = document.querySelector('.display-calculate');
    displayElement.textContent = calculation || '';
    displayElement.scrollLeft = displayElement.scrollWidth;
}

// update calculation
function updateCalculation(value) {
    if (calculation === 'Error') calculation = '';
    calculation += value;
    display();
    localStorage.setItem('calculation', calculation);
}

//evaluate calculation
function evaluateCalc() {
    const trimmed = calculation.trim();
    if(trimmed === ''){
        calculation = '';
        display();
        return;
    }

    try {
        calculation = eval(calculation);
        calculation = calculation.toString();
        display();
        localStorage.setItem('calculation', calculation);
    } catch {
        calculation = 'Error';
        display();
    }
}
// button on click
document.querySelectorAll('.btn-number, .btn-operator').forEach((button) => {
    const value = button.dataset.value;
    if (value) {
        button.addEventListener('click', () => {
            updateCalculation(value)
        })
    }
});

// equals button
document.getElementById('equals').addEventListener('click', () => {
    evaluateCalc();
});

//clear button
document.getElementById('clear').addEventListener('click', () => {

    calculation = '';
    display();
    localStorage.setItem('calculation', calculation);
})

// keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        updateCalculation(key);
        return;
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        evaluateCalc();
        return;
    }
    if (key === 'Backspace') {
        event.preventDefault();
        if (calculation === 'Error') { calculation = ''; }
        else {
            calculation = calculation.slice(0, -1);
        }
        display();
        localStorage.setItem('calculation', calculation);
        return;
    }
    if (key === 'Escape') {
        event.preventDefault();
        calculation = '';
        display();
        localStorage.setItem('calculation', calculation);
        return;
    }
})