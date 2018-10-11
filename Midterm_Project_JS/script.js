const cars = {
    carsDiv: document.getElementById("cars"),
    picArr: ["<img src='pics/yellow_car.png'> ",
             "<img src='pics/green_car.png'> ", "<img src='pics/black_car.png'> " ]
};
const lights = {
    greenLight: document.getElementById("green"),
    redLight: document.getElementById("red"),
    startButton: document.getElementById("start")
}

function fillCarsDiv() {
    for (i = 0; i < cars.picArr.length; i++){
        var createCarDiv = document.createElement("div"); 
        createCarDiv.innerHTML += cars.picArr[i];
        cars.carsDiv.appendChild(createCarDiv);
    }
}


lights.startButton.addEventListener("click", function(){
    lights.redLight.style.backgroundColor = "grey";
    lights.greenLight.style.backgroundColor = "green";
    elementChildren = document.getElementById("cars").children;
    var carPos = {
        width: 0,
        step: 0,
    }
    var temp = elementChildren[1].getBoundingClientRect();
    var rect = document.getElementById("finishLine").getBoundingClientRect();

    while (rect.right > temp.right) {
        x =+10;
        elementChildren[1].marginLeft = `${x}px`
    }  
        console.log(carPos.width,carPos.step);
        console.log(elementChildren[1])
        console.log(rect.right);
          
    });//end on event listener
    

fillCarsDiv();
