//load and render calculation
let calculation = localStorage.getItem('calculation') || '';
display();

//display function
function display() {
    document.querySelector('.display-calculate').innerHTML = `${calculation}`;
}

// update calculation
function updateCalculation(value) {
    calculation += value;
    display();
    localStorage.setItem('calculation', calculation);
}

//evaluate calculation
function evaluateCalc(){
    try {
        calculation = eval(calculation);
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

    if(!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)){
        updateCalculation(key);
        return;
    }

    if(key === 'Enter' || key === '='){
        event.preventDefault();
        evaluateCalc();
        return;
    }
    if(key === 'Backspace'){
        event.preventDefault();
        calculation = calculation.slice(0, -1);
        display();
        localStorage.setItem('calculation', calculation);
        return;
    }
    if(key === 'Escape'){
        event.preventDefault();
        calculation = '';
        display();
        localStorage.setItem('calculation', calculation);
        return;
    }
})