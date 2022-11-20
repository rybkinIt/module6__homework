function num(){
    let b
    let a=prompt('Введите число до 1000')
    if(a<1001){
        b=a
    }
    else{
        alert('Ошибка ввода')
        return false

    }
    if(b%1===0&&b>2){
        alert(b+'-Число простое')
    }
    else{
        alert(b+'-Число не простое')
    }
}
num()