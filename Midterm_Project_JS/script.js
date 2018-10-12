var carsDiv = document.getElementById("cars");
    
const cars = [
    
    {pic: "<img src='pics/yellow_car.png'> "},
    {pic: "<img src='pics/green_car.png'> "}, 
    {pic: "<img src='pics/black_car.png'> "} 
];
const lights = {
    greenLight: document.getElementById("green"),
    redLight: document.getElementById("red"),
    startButton: document.getElementById("start")
}

function fillCarsDiv() {
    for (i = 0; i < cars.length; i++){
        cars[i].element = document.createElement("div"); 
        cars[i].element.innerHTML += cars[i].pic;
        carsDiv.appendChild(cars[i].element);
    }
}

function moveCars() {
   var finishLinePos = document.getElementById("finishLine").getBoundingClientRect();
   console.log(finishLinePos.right)
  // i = 0;
   //while (finishLinePos.right){
   //  cars[i].element.style.marginLeft = "200px"
    // i++
  // }
}

lights.startButton.addEventListener("click", function(){
    lights.redLight.style.backgroundColor = "grey";
    lights.greenLight.style.backgroundColor = "green";
    cars.forEach(moveCars);
   
   
        
        

    
    
          
    });//end on event listener
    

fillCarsDiv()
