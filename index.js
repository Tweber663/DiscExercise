const arrows = ["1", "2", "3"]; 
const button = document.querySelector("button");
let image = document.querySelector("img");
const span = document.querySelector("span");
let mainbox = document.querySelector(".main-box");
let h3 = document.querySelector("h3");
let set = 0; 


// CountDown timer
button.addEventListener("click", e => {
const alarmAudio = new Audio("Sounds/alarm.mp3");

    let time = 36; 
    let timeCycle = setInterval((callback) => {
        span.innerHTML = time;
        if (time > 0) {
            time--; 
        } else if (time === 0) {
            time += 36;
            alarmAudio.play();
            clearInterval(timeCycle);
        } 
    }, 1000);

    
    let ArrowCycle = setInterval(() => {
        let random = Math.floor(Math.random() * 7 + 1);

        image.setAttribute("src", "Photos/" + random + " Leg.png");

        mainbox.classList.add("main-box-color");
        
        setTimeout(() => {
        mainbox.classList.remove("main-box-color")    
        }, 200);
        if (span.innerHTML === "0") {
            clearInterval(ArrowCycle);
        }
        }, 3000);
    

      set++; 
      h3.innerHTML = `${set} Reps`;


  })
    

// Arrow animation
    


