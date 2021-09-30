const MY_CAR = {
    wheels: 4,
    cylindres: 4,
    size: 2.2
}

function main(myCar) {
    // Only change code below this line

    const { cylindres: carCylindres, size: carSize} = myCar; 

    return {carCylindres, carSize};
    // Only change code above this line

    
}

console.log(main(MY_CAR ));
module.exports = main;