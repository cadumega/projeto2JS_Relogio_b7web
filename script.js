// Selecionar os elementos que iremos manipular, mais simples o relógio digital
let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s")
let mElement = document.querySelector(".p_m")
let hElement = document.querySelector(".p_h")

function updateClock(){
    let now = new Date ();       //manipulacao de data
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero (minute)}:${fixZero (second)}`

}

// function fixZero(time) {     //recebo um tempo time
//     if(time < 10) {
//         return '0'+time;
//     } else {
//         return time;
//     }

    function fixZero(time) {
        return time < 10 ? `0${time}` : time;   // time menor q 10 retorna ... se nao retorna ...
    }


setInterval(updateClock, 1000);  // atualiza de 1s em 1s