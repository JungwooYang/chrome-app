const images = ["0.png","1.png","2.png","3.png","4.png","5.png", "6.png", "7.png", "8.png", "9.png", "10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"];

const chosenImage1 = images[Math.floor(Math.random() * images.length)];
const chosenImage2 = images[Math.floor(Math.random() * images.length)];

const bgImage1 = document.querySelector(".img-container img:first-child");
const bgImage2 = document.querySelector(".img-container img:nth-child(2)");

bgImage1.src = `img/${chosenImage1}`;
bgImage2.src = `img/${chosenImage2}`;
// document.main-img.appendChild(bgImage);