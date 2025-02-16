"use strict";
const main = document.querySelector(".main");
console.log(main);
let i = 1;
setInterval(function () {
  let imageURL = `url(../imgs/image${i}.jpg)`;
  main.style.backgroundImage = imageURL;
  i = (i % 4) + 1;
}, i * 3000); // Change every 2 seconds
