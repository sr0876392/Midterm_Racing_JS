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
        cars[i].element.setAttribute("id", `car${i+1}`)
        cars[i].element.innerHTML += cars[i].pic;
        carsDiv.appendChild(cars[i].element);
    }
}

/*function moveCars() {
   var finishLineImg = document.getElementById("finishLine").getElementsByTagName("img");
   var finishLinePos = finishLineImg[0].getBoundingClientRect().left;
   cond = true;
   rand = 0;
   while(cond == true) {  
            for (i = 1; i <= 3; i++){
                
                carpos = document.getElementById(`car${i}`).getElementsByTagName("img");
                function funct(){
                    rand += Math.floor(Math.random() * 10);
                    carpos[0].style.marginLeft = `${rand}px`
                    
                }
                setTimeout(funct(),1000);
                
                console.log(rand)
                
                if (finishLinePos < carpos[0].getBoundingClientRect().left){
                cond = false
                }
            } 
            i = 1;
        }
        
    }
   
*/


lights.startButton.addEventListener("click", function(){
    lights.redLight.style.backgroundColor = "grey";
    lights.greenLight.style.backgroundColor = "green";
    
    
    
   
        
        

    
    
          
    });//end on event listener
    

fillCarsDiv()
