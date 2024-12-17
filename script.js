
const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];


function removeElement(arr, item) {

    for (let i = arr.length - 1; i >= 0; i--) {

        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}



removeElement(array, 4);
console.log(array);
// Результат: [1, 3, 6, 2, 5, 7]