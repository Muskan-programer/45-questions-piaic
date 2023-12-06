
function orderSandwich(...items: string[]):void{
    console.log("Sandwinch summry:");
    if (items.length === 0 ){
        console.log("You ordered an empty sandwinch.");
    } else {
        console.log("Items:" + items.join(","));
        console.log("Enjoy your sandwinch!");
    }
    console.log();
}


orderSandwich("Ham", "Cheese", "Lettuce", " Tomato");
orderSandwich("Turkey", "Cream","Cheese", "Moya");
orderSandwich();

