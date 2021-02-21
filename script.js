"use strict"
let btn = document.getElementById("btn");
let code = document.getElementById("color_code");

btn.addEventListener('click', () => {
    let random1 = parseInt(Math.random()*256)
    let random2 = parseInt(Math.random()*256)
    let random3 = parseInt(Math.random()*256)

    document.body.style.background = `rgb(${random1},${random2},${random3})`;
    code.innerHTML = `rgb(${random1},${random2},${random3})`;

    console.log(random1, random2, random3);
    // console.log("hey")
})