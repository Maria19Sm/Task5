const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arrayLength = Math.floor(Math.random() * 10) + 1;
const randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100));
randomArray.sort((a, b) => a - b);

console.log('Випадковий відсортований масив чисел:', randomArray);

rl.question('Введіть число, яке шукається: ', (input) => {
  const target = parseInt(input);

  function binarySearch(arr, searshElement) {
    let leftside = 0;
    let rightside = arr.length - 1;

    while (leftside <= rightside) {
      const mid = Math.floor((leftside + rightside) / 2);

      if (arr[mid] === searshElement) {
        return mid;
      } else if (arr[mid] < searshElement) {
        leftside = mid + 1;
      } else {
        rightside = mid - 1;
      }
    }

    return -1;
  }

  const result = binarySearch(randomArray, target);

  if (result !== -1) {
    console.log(`Значення ${target} знайдено на позиції ${result}.`);
  } else {
    console.log(`Значення ${target} не знайдено.`);
  }

  rl.close();
});
