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

// button on press

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === `1`) updateCalculation('1');
    if (event.key === `2`) updateCalculation('2');
    if (event.key === `3`) updateCalculation('3');
    if (event.key === `4`) updateCalculation('4');
    if (event.key === `5`) updateCalculation('5');
    if (event.key === `6`) updateCalculation('6');
    if (event.key === `7`) updateCalculation('7');
    if (event.key === `8`) updateCalculation('8');
    if (event.key === `9`) updateCalculation('9');
    if (event.key === `0`) updateCalculation('0');
    if (event.key === `.`) updateCalculation('.');
    if (event.key === `=` || event.key === `Enter`) {
        calculation = eval(calculation);
        display();
        localStorage.setItem('calculation', calculation);
    }
    if (event.key === `/`) updateCalculation('/');
    if (event.key === `+`) updateCalculation('+');
    if (event.key === `-`) updateCalculation('-');
    if (event.key === `*`) updateCalculation('*');
    if (event.key === `Backspace`) {
        calculation = '';
        display();
        localStorage.setItem('calculation', calculation);
    }
})