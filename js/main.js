let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let btnStart = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnStop = document.querySelector('.stop')
let btnSet = document.querySelector('.set')
let btnPlus = document.querySelector('.plus')
let btnMinus = document.querySelector('.minus')
let timer;
let timeOut;
const kitchenTimerAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)
const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
let forestSound = new Audio("../audio/floresta.wav");
let rainSound = new Audio("../audio/chuva.wav");
let marketSound = new Audio("../audio/cafeteria.wav");
let fireSound = new Audio("../audio/lareira.wav");
let forestCard = document.querySelector('.tree')
let rainCard = document.querySelector('.cloud')
let marketCard = document.querySelector('.store')
let fireCard = document.querySelector('.fire')


forestSound.loop = true;
rainSound.loop = true;
marketSound.loop = true;
fireSound.loop = true

btnStart.addEventListener('click', function(){
    btnStart.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
    buttonPressAudio.play()
    countdown()
})

btnSet.addEventListener('click', function(){
    let minutes = Number(prompt('Quantos minutos?'))
    while(minutes <= 0 || minutes >= 60 || isNaN(minutes)){
        minutes = prompt('Digite minutos entre 1 e 60')
    }
    displayMinutes.textContent = formatTime(minutes)
})

btnPause.addEventListener("click", function(){
    btnPause.classList.add("hide")
    btnStart.classList.remove("hide")
    clearTimeout(timeOut)
})

btnStop.addEventListener("click", function(){
    clearTimeout(timeOut)
    resetTime()
    resetControls()
})

btnPlus.addEventListener("click", function(){
    let minutes = Number(displayMinutes.textContent)
    let newMinutes = minutes + 5
    if(newMinutes <= 60){
        displayMinutes.textContent = formatTime(newMinutes)
    }
})

btnMinus.addEventListener("click", function(){
    let minutes = Number(displayMinutes.textContent)
    let newMinutes = minutes - 5
    if(newMinutes >= 0){
        displayMinutes.textContent = formatTime(newMinutes)
    }
})

function formatTime(time){
    return String(time).padStart(2, "0")
}

function countdown(){
    timeOut = setTimeout(function(){
        let minutes = Number(displayMinutes.textContent)
        let seconds = Number(displaySeconds.textContent)

        if(minutes <= 0 && seconds <= 0){
            clearTimeout(timeOut)
            resetTime()
            resetControls()
            return
        }
        
        if(seconds == 0){
            seconds = 60
            minutes--
        }

        seconds--

       displaySeconds.textContent = formatTime(seconds)
       displayMinutes.textContent = formatTime(minutes)
        countdown()
    }, 1000)
}

function resetControls(){
    btnStart.classList.remove('hide')
    btnPause.classList.add('hide')
    btnSet.classList.remove('hide')
    btnStop.classList.add('hide')
}

function resetTime(){
    displaySeconds.textContent = formatTime(0)
    displayMinutes.textContent = formatTime(0)
    kitchenTimerAudio.play()
}

forestCard.addEventListener('click', function(){
    if(forestCard.classList.contains('active')){
        forestCard.classList.remove('active')
        forestSound.pause()
    }else{
        forestCard.classList.add('active')
        forestSound.play()
    } 
})

rainCard.addEventListener('click', function(){
    if(rainCard.classList.contains('active')){
        rainCard.classList.remove('active')
        rainSound.pause()
    }else{
        rainCard.classList.add('active')
        rainSound.play()
    } 
})

marketCard.addEventListener('click', function(){
    if(marketCard.classList.contains('active')){
        marketCard.classList.remove('active')
        marketSound.pause()
    }else{
        marketCard.classList.add('active')
        marketSound.play()
    } 
})

fireCard.addEventListener('click', function(){
    if(fireCard.classList.contains('active')){
        fireCard.classList.remove('active')
        fireSound.pause()
    }else{
        fireCard.classList.add('active')
        fireSound.play()
    } 
})



