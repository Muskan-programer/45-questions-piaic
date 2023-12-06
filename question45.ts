
function createCar(manufacturer: string, modle: string,...options:{[Key: string]: any}[]): object{
    const cars: {manufacturer: string; model: string; [Key: string]: any }= {
        manufacturer,
        modle,
        model: ""
    };

    options.forEach((option) => {
        const [Key, value] = Object.entries(option)[0];
        cars [Key]= value;
    });
    return cars;
}


const carInfo = createCar("Toyota"," cmary", {color: " Blue"}, {Year: 2022});


console.log("Car information:");
console.log(carInfo);