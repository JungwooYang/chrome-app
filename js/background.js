const images = ["europeana-5TK1F5VfdIk-unsplash.jpg", "jene-stephaniuk--MCrF6hnojU-unsplash.jpg", "prometey-sanchez-noskov-c6M7AoevSXE-unsplash.jpg", "victor-grabarczyk-wN9DU73b8_s-unsplash.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);