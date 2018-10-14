const cars = {
   carsArr: ["<img id='greenCar' src='pics/green_car.png'> ",
             "<img id='yellowCar' src='pics/yellow_car.png'> ",
             "<img id='blackCar' src='pics/black_car.png'> "],

   carsDiv: document.getElementById('cars'),

   fillCars : function createCarsDivs() {
        for (i = 0; i < this.carsArr.length; i++){
           this.carsDiv.innerHTML += this.carsArr[i]
        }
    },
   // greenCarImg: document.getElementById('greenCar'),
   // yellowCarImg: document.getElementById('yellowCar'),
    //blackCarImg: document.getElementById('blackCar'),
    
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
        
        
            console.log(carPositions[0], carPositions[1],carPositions[2])
        
            for (i = 0; i < carPositions.length; i++){
                rand = Math.floor(Math.random() * 20);
                carImg[i].style.marginLeft = `${carPositions[i] + rand}px`;
                carPositions[i] = carPositions[i];
                console.log('FOR LOOP')
            }
           

        //console.log(finishLinePos,carPositions[0],document.getElementById('greenCar').getBoundingClientRect(), carPositions[1],carPositions[2], carImg[0])
    }
}  


const lights = {
    greenLight: document.getElementById("green"),
    redLight: document.getElementById("red"),
    startButton: document.getElementById("start")
};

cars.fillCars();
lights.startButton.addEventListener("click", function(){
    lights.redLight.style.backgroundColor = "grey";
    lights.greenLight.style.backgroundColor = "green";
    cars.moveCars()
    function runCars(){
        for (i=0; carPositions[i] < (finishLinePos + 20); i++){
            setTimeout(runCars, 32);
            cars.moveCars()
        }
        if (i == carPositions.length){
            i = 0 ; 
        }      
                    
            
}
runCars();
            
            
            
        
  
    
    
     
      
});


    
