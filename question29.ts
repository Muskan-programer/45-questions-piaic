// array of three favorite fruits
const favoriteFruits: string[] = ['banana', 'apple', 'strawberry'];

// statments to check for certain fruits in the array
if (favoriteFruits.includes('banana')) {
    console.log("I really like bananas");
}

if (favoriteFruits.includes('apple')) {
    console.log("I really like apples.");
}

if (favoriteFruits.includes('strawberry')) {
    console.log("I really like strawberrys");
}

if (favoriteFruits.includes('orange')) {
    console.log("I really like oranges");
} else {
    console.log("orange are not in my list of favorite fruit.");
}

if (favoriteFruits.includes('grape')) {
    console.log("I really like grapes");
} else {
    console.log("Grape are not in my list of favorite fruit.");
}
