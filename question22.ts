// Define an array of numbers
const numbers: number[] = [8, 3, 6, 1, 5, 2, 9];

// try to access an elemant  at an invalid index  (intentional error)
const invalidIndex = 10;

// check if the index is wiht in the valid rang before accessing the element
if (invalidIndex >= 0 && invalidIndex < numbers.length){
    console.log(`Accessing element at index ${invalidIndex}: ${numbers[invalidIndex]}`);
} else {
    console.log(`Invalid index ${invalidIndex}. please provide a valid index.`);
}
