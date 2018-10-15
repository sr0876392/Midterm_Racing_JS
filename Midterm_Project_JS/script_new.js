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
        finishLinePos = finishLineImg.getBoundingClientRect().left; //get position of the finish line
        var carImg = cars.carImg = [document.getElementById('greenCar'), //appending carImg in moveAllCars as a property of cars object
                                    document.getElementById('yellowCar'),
                                    document.getElementById('blackCar'),
        ];
        //obtains .left positions for all cars
        carPositions = [document.getElementById('greenCar').getBoundingClientRect().left,
                        document.getElementById('yellowCar').getBoundingClientRect().left,
                        document.getElementById('blackCar').getBoundingClientRect().left,
        ];
// for loop sets margins for cars and updates their x coordinates
        for (i = 0; i < carPositions.length; i++){
                this.carSpeed = Math.floor(Math.random() * 15);                      //setting car speed 
                carImg[i].style.marginLeft = `${carPositions[i] + this.carSpeed}px`; //setting left margin for all elements in cars.carImg
                carPositions[i] += this.carSpeed;                                    //updates carPositions values
                if (carPositions[i] >= (finishLinePos + 50)){                        //if any elements of carPositions exceeds finish line postion + 50(px)
                    return i;                                                        //return which one
                }
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
var winnerDiv = document.getElementById('winner');
var winnerPicImg = document.getElementById('winnerPic');
//event listener to change the light color and start the race when start button is pressed
lights.startButton.addEventListener("click", function(){
    lights.redLight.style.backgroundColor = "grey";
    lights.greenLight.style.backgroundColor = "green";
    //calling moveCars and intervals in which moveCars will be called in runCars
    function runCars(){
        var winner = cars.moveCars(); //sets winner to whatever cars.moveCars will return(i)
        if (winner == undefined){    //i is undefined until conditions are met
            setTimeout(runCars, 32); //sets timeout for execution of runCars (so that we will see cars moving)
        } else { 
            var winnerSrc = cars.carImg[winner].getAttribute("src"); //gets the source of the winner image
            winnerPicImg.setAttribute("src", winnerSrc);             //inserts the source that we got into the winnerPicImg
            winnerDiv.style.display = "block";                       //makes it visible
            
        }
    }
    runCars();
});
//adds event listener so that when the winner image is clicked resets the race to its original state
winnerPicImg.addEventListener("click", function(){
    winnerDiv.style.display = "none";
    lights.redLight.style.backgroundColor = "red";
    lights.greenLight.style.backgroundColor = "grey";
    for (var i = 0; i < cars.carImg.length;i++ ){
        cars.carImg[i].style.marginLeft = "0";
    }
});


    
