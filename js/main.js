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
let forestCard = document.querySelector('.card-forest')
let rainCard = document.querySelector('.card-rain')
let marketCard = document.querySelector('.card-market')
let fireCard = document.querySelector('.card-fire')
let forestVol = document.querySelector('#forestVol')
let rainVol = document.querySelector('#rainVol')
let marketVol = document.querySelector('#marketVol')
let fireVol = document.querySelector('#fireVol')
let main = document.querySelector('main')
let lightButton = document.querySelector('.light-mode')
let darkButton = document.querySelector('.dark-mode')

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
    while(minutes <= 0 || minutes > 60 || isNaN(minutes)){
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

forestCard.addEventListener('click', function(){
    if(forestCard.parentElement.classList.contains('active')){
        forestCard.parentElement.classList.remove('active')
        forestSound.pause()
    }else{
        forestCard.parentElement.classList.add('active')
        forestSound.play()
    }   
})

rainCard.addEventListener('click', function(){
    if(rainCard.parentElement.classList.contains('active')){
        rainCard.parentElement.classList.remove('active')
        rainSound.pause()
    }else{
        rainCard.parentElement.classList.add('active')
        rainSound.play()
    } 
})

marketCard.addEventListener('click', function(){
    if(marketCard.parentElement.classList.contains('active')){
        marketCard.parentElement.classList.remove('active')
        marketSound.pause()
    }else{
        marketCard.parentElement.classList.add('active')
        marketSound.play()
    } 
})

fireCard.addEventListener('click', function(){
    if(fireCard.parentElement.classList.contains('active')){
        fireCard.parentElement.classList.remove('active')
        fireSound.pause()
    }else{
        fireCard.parentElement.classList.add('active')
        fireSound.play()
    } 
})

forestVol.addEventListener('input', function(){
    forestSound.volume = forestVol.value
})

rainVol.addEventListener('input', function(){
    rainSound.volume = rainVol.value
})

marketVol.addEventListener('input', function(){
    marketSound.volume = marketVol.value
})

fireVol.addEventListener('input', function(){
    fireSound.volume = fireVol.value
})

lightButton.addEventListener('click', function(){
    lightButton.classList.add('hide')
    darkButton.classList.remove('hide')
    main.classList.add('dark')
})

darkButton.addEventListener('click', function(){
    lightButton.classList.remove('hide')
    darkButton.classList.add('hide')
    main.classList.remove('dark')
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