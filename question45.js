function createCar(manufacturer, modle) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modle: modle,
    };
    options.forEach(function (option) {
        var _a = Object.entries(option)[0], Key = _a[0], value = _a[1];
        car[Key] = value;
    });
    return car;
}
var carInfo = createCar("Toyota", " cmary", { color: " Blue" }, { Year: 2022 });
console.log("Car information:");
console.log(carInfo);
