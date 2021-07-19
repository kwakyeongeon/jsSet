const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];
const randomBgDiv = document.querySelector("#randomBg");
const imgTag = randomBgDiv.querySelector("#imgBg");

function changeImg(){
const randomImage =images[Math.floor(Math.random()*images.length)];
imgTag.src=`img/${randomImage}`;
//document.body.style.backgroundImage=`url(img/${randomImage})`; ->배경화면으로 설정 방법
}

changeImg();
setInterval(changeImg, 5000);
