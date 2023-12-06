// define an array  of are objects
var cars = [
    {
        branb: " Toyota",
        model: " camry",
        yesr: " 2022",
        color: " silver"
    },
    {
        brand: "Honda",
        model: "civic",
        year: "2021",
        color: " Blue"
    }
];
{
    brand: "Tesla";
    model: "Model 3";
    year: "2022";
    color: "White";
}
;
;
// print information about each car
console.log("List of cars:");
cars.forEach(function (car, indox) {
    console.log(" ".concat(index + 1, ". brand: ").concat(car.brand));
    console.log("  Model: ".concat(car.model));
    console.log("  Year: ".concat(car.yesr));
    console.log("  color: ".concat(car.color));
    console.log();
});
