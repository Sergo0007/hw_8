
// Поиск максимального числа:

let arrays = [3,7,5,9,4,6];
let max = arrays[0];

// for(let i = 0; i < array.length; i++){
//     if(array[i] > max){
//         max = array[i];
//     }
// }
// console.log(max);

for(let array of arrays){
    if(array > max){
        max = array;
    }
}
console.log(max);

//Генератор таблицы умножения

let number = 5;

for(let i = 1; i <= 10;i++){
    let n = number * i;
    console.log(number + " x " + i + " = " + n)
}

// Подсчет четных чисел
let array = [3,5,7,9,8,2];
let count = [];
 for (let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0){
        count++
    }
}
 console.log(count);

//  Реверс массива
// let numbers = [7,4,6,12,5];
// let revers = [];

// for( let i = array.length -1;i >= 0;i--){
//     revers.push(numbers[i]);
// }
// console.log(revers);
let numbers = [7,4,6,12,5];
let revers = [];

for(let i = array.length -1; i >= 0;i--){
    revers[numbers.length -1 - i] = numbers[i];

}
console.log(revers);


