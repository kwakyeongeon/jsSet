const clockH2 = document.querySelector("h2#clock");



function clock(){
    const date = new Date();
    const dateHoure = date.getHours().toString();
    const dateMinute = date.getMinutes().toString();
    const dateSeconds = date.getSeconds().toString();
    clockH2.innerText = `${dateHoure.padStart(2,"0")}:${dateMinute.padStart(2,"0")}:${dateSeconds.padStart(2,"0")}`;
}
clock();

setInterval(clock,1000);
