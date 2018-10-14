//creating cars object
const cars = {
//creating cars array with 3 cars
   carsArr: ["<img id='greenCar' src='pics/green_car.png'> ",
             "<img id='yellowCar' src='pics/yellow_car.png'> ",
             "<img id='blackCar' src='pics/black_car.png'> "],
//getting the carsDiv whic we will fill with cars in carsArr
   carsDiv: document.getElementById('cars'),
//setting an value for car speed
   carSpeed: 0,
//fillCars fills the carsDiv with cars from carsArr
   fillCars : function createCarsDivs() {
        for (i = 0; i < this.carsArr.length; i++){
           this.carsDiv.innerHTML += this.carsArr[i]
        }
    },
//moveCars obtains all car images and their x coordinates 
    moveCars: function moveAllCars() {
        var finishLineImg = document.getElementById("fLineImg");
        finishLinePos = finishLineImg.getBoundingClientRect().left;
        var carImg = [document.getElementById('greenCar'),
                      document.getElementById('yellowCar'),
                      document.getElementById('blackCar'),
        ];
        carPositions = [document.getElementById('greenCar').getBoundingClientRect().left,
                        document.getElementById('yellowCar').getBoundingClientRect().left,
                        document.getElementById('blackCar').getBoundingClientRect().left,
        ];
// for loop sets margins for cars and updates their x coordinates
        for (i = 0; i < carPositions.length; i++){
                this.carSpeed = Math.floor(Math.random() * 15)
                carImg[i].style.marginLeft = `${carPositions[i] + this.carSpeed}px`;
                carPositions[i] = carPositions[i];
        };
    }
}  


//setting up the traffic light
const lights = {
    greenLight: document.getElementById("green"),
    redLight: document.getElementById("red"),
    startButton: document.getElementById("start")
};
//runs fillCars on load
cars.fillCars();
//event listener to change the light color and start the race when start button is pressed
lights.startButton.addEventListener("click", function(){
    lights.redLight.style.backgroundColor = "grey";
    lights.greenLight.style.backgroundColor = "green";
    //calling moveCars and intervals in which moveCars will be called in runCars
    cars.moveCars()
    function runCars(){
        for (i=0; carPositions[i] < (finishLinePos + 30);){
            setTimeout(runCars, 32);
            cars.moveCars()
        };
    }
    runCars();
});


    
