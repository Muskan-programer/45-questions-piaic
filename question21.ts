// define an array  of are objects
const cars:{brand: string, model: string, yesr: number, color: string}[] = [
    {
    branb: " Toyota";
    model: " camry";
    yesr: " 2022";
    color: " silver";
    },
    {
      brand: "Honda",
      model: "civic";
      year: "2021";
      color: " Blue";
    };
    {
      brand: "Tesla";
      model: "Model 3";
      year: "2022";
      color: "White";
    };
];


// print information about each car
console.log("List of cars:");
cars.forEach((car , indox) => {
    console.log(` ${ index + 1}. brand: ${car.brand}`);
    console.log(`  Model: ${car. model}`);
    console.log(`  Year: ${car. yesr}`);
    console.log(`  color: ${ car.color}`);
    console.log();
});