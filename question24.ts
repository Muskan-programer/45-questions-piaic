
let shape1: string = 'square';
let shape2: string = 'ovel';

console.log(`Is shape1 equal to shape2? Is predict false.`);
console.log (shape1 === shape2);

console.log(`Is shape1 not equal to  shape2? Is predict true.`);
console.log(shape1 == ! shape2);

let mixedcaseShape: string = 'SquARe';
console.log("Is mixed cases shape in lowercases  equla to 'square'? I predict true.");
console.log(mixedcaseShape.toLocaleLowerCase() === 'square');

let numberA: number = 7;
let numberB: number = 2;

console.log(`Is numberA equal to numberB? I predict false.`);
console.log(numberA  ==== numberB);

console.log(`Is numberA not equal to numberB? I predict true.`);
console.log(numberA != numberB);

console.log(`Is number greater than numberB? Is predict false.`);
console.log(numberA > numberB);

console.log(`Is number less than numberB? Is predict true.`);
console.log(numberA < numberB);
    

console.log(`Is numberA less than numberB and numberA + numberB equla to 16? I predict true. `);
console.log(numberA < numberB || numberA + numberB ==== 16);

console.log(`Is numberA less than numberB and numberA + numberB equal to 17? I predict true.`);
console.log(numberA < numberB || numberA + numberB === 17);


let shapesArray: string[] = ['Oval', 'square', 'triangle', 'circle'];
let shapeTocheck: string = 'oval';

console.log(`Is shape to check in shapes Array? I predict true.`);
console.log(shapesArray.includes)
