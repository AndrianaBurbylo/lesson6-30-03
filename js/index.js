const numb = parseInt(prompt('Введіть порядковий номер числа Фібоначчі, яке потрібно вивести на екран '));

const result = countFib(numb);
document.write('Число Фібоначчі = ' + result + '<br>');

function countFib(){
    const fibNumb = [1, 1];
    for (let i=2; i<=numb; i++) {
        fibNumb.push(fibNumb[i-2]+fibNumb[i-1]);
    }
    return fibNumb[numb-1];
}