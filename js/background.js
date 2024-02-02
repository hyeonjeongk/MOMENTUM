const images = [
  "bg0.jpeg",
  "bg1.jpeg",
  "bg2.jpeg",
  "bg3.jpeg",
  "bg4.jpeg",
  "bg5.jpeg",
  "bg6.jpeg",
  "bg7.jpeg",
  "bg8.jpeg",
  "bg9.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
