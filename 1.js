let arr = [0,0,1,2,3,4,null,'str']
let sum=0
let b=0;
if (arr.includes(0)){
    arr = arr.filter(function(val) {
        return val !== 0||null;
    });
    console.log('В массиве есть 0')
}
arr=arr.filter(function(x) {
    return Number(x);
});

function Even(K){
    return K % 2 == 0;
}

for(var i=0, k=0; i<arr.length; i++){
    if(Even(arr[i]))
        k++;


}
sum=arr.length-k
console.log('Количество четных элементов '+k, 'Количество нечетных элементовa'+sum);