function num(a, b) {
    let c = a;

    let timerId = setInterval(function() {
        console.log(c);
        if (c === b) {
            clearInterval(timerId);
        }else c++;
    }, 1000);
}
num(a=+prompt('Введите первое число'), b=+prompt('Введите второе число'));