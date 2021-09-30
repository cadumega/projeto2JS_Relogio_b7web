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

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero (minute)}:${fixZero (second)}`    // adicionar um zero

    // let sDeg = ((360 / 60) * second) -90; // cada segundo 6 graus, 360/60 //esta tendo um aumento de 90graus, diminuir -90
    // let mDeg = ((360 / 60) * minute) -90;
    // let hDeg = ((360 / 12) * hour) -90;  // um dia da duas voltas de 12h

    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) + ((30/60) * minute) - 90;/*Entre uma hora e outra temos um ângulo de 30 graus,
o ponteiro percorrerá esse ângulo dentro dos 60 mins, logo a cada minuto o ponteiro percorrerá 0,5 grau.
O minuto vai somente até 59 quando vai entrar no '60' ele vai pra próxima hora sendo o minuto 00, sendo assim não da nenhum bug.*/

    sElement.style.transform = `rotate(${sDeg}deg)`   // css transform - para rotacionar conforme os graus
    mElement.style.transform = `rotate(${mDeg}deg)` 
    hElement.style.transform = `rotate(${hDeg}deg)` 
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;   // time menor q 10 retorna 0 se nao retorna nada
}

// function fixZero(time) {     //recebo um tempo time
//     if(time < 10) {
//         return '0'+time;
//     } else {
//         return time;
//     }


setInterval(updateClock, 1000);  // atualiza de 1s em 1s , delay de 1sec
updateClock(); // para ficar instantaneo o processo