// DARK / lihgt MODE
const dark = window.document.querySelector(".dark-div");
const imagem = window.document.querySelector("#container img");

dark.addEventListener("click", darkmode);

function darkmode () {

    const html = document.documentElement;
    html.classList.toggle("light");


    if(html.classList.contains("light")) {
        imagem.setAttribute("src", "./img/icons8-tempo-99.png");
    }

    else {
        imagem.setAttribute("src", "./img/icons8-fast-60 (1).png");
    }

}



// TOCAR A MUSICA
window.document.querySelector(".mm").addEventListener("click", playMusic)

function playMusic () {
    let audio = window.document.querySelector(".audio");
    audio.play();

    let iconeMusica = window.document.querySelector(".mm");
    let mute = window.document.querySelector(".mute");


    mute.style.display = "block";
    iconeMusica.style.display = "none";
}




// PAUSAR A MUSICA  
window.document.querySelector(".mute").addEventListener("click", pauseMusic);

function pauseMusic () {
    let audio = window.document.querySelector(".audio");
    audio.pause();


    let iconeMusica = window.document.querySelector(".mm");
    let mute = window.document.querySelector(".mute");


    mute.style.display = "none";
    iconeMusica.style.display = "block";

}


// Declarando as variaves q serão ultilizadas nas funções abaixo...
const horasEl = window.document.querySelector(".horas");
const minutesEl = window.document.querySelector(".minutes");
const secondsEl = window.document.querySelector(".seconds");
const millesimosEl = window.document.querySelector(".millesimo");


let horas = 0;
let minutes = 0;
let seconds = 0;
let millesimos = 0;

let isPaused = false;
let interval;


const startBtn = window.document.querySelector("#startBtn");
const pauseBtn = window.document.querySelector("#pauseBtn");
const resumeBtn = window.document.querySelector("#resumeBtn");
const resetBtn = window.document.querySelector("#resetBtn");



// Função (botão iniciar) - INICIAR O CRONOMETRO
startBtn.addEventListener("click", startTime);

function startTime () {
    interval = setInterval(() => {

        if (isPaused === false) {
            millesimos += 10;
            
            if(minutes > 60) {
                horas ++;
                minutes = 0;
            }

            if(seconds > 60) {
                minutes ++;
                seconds = 0;
            }

            if(millesimos == 1000) {
                seconds ++;
                millesimos = 0;
            }
        }

        horasEl.textContent = formatarTime(horas);
        minutesEl.textContent = formatarTime(minutes);
        secondsEl.textContent = formatarTime(seconds);
        millesimosEl.textContent = formatMilliseconds(millesimos);

    },10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";


}


//FUNÇÃO PARA FORMATAR MINUTOS / SEGUNDOS / HORAS
function formatarTime (time) {
    return  time < 10 ? `0${time}`: time;
}



//FUNÇÃO PARA FORMATAR MILLESIMOS
function formatMilliseconds (time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}




//FUNÇÃO PARA PAUSAR O CRONOMETRO
pauseBtn.addEventListener("click", pauseTime);

function pauseTime () {
    isPaused = true;
    resumeBtn.style.display = "block";
    pauseBtn.style.display = "none";

}



//FUNCTION CONTINUAR
resumeBtn.addEventListener("click", continuar)

function continuar () {
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}




// FUNÇÃO PARA RESETAR O TEMPO SALVO

resetBtn.addEventListener("click", resetTime)

function resetTime () {
    clearInterval(interval)

    millesimos = 0
    seconds = 0
    minutes = 0
    horas = 0

    millesimosEl.textContent = "000"
    secondsEl.textContent = "00"
    minutesEl.textContent = "00"
    horasEl.textContent = "00"


    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";

}
