"use strict"

console.log("JS is loaded")

let additionForm = document.getElementById("additionForm")
additionForm.onsubmit = calculateSum

function calculateSum (event) {
    event.preventDefault()

    console.dir(event.target)
    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    console.log(x)
    console.log(y)

    let sum= (x) + (y)

    let additionResults = document.getElementById("additionResults")
     additionResults.innerHTML = `<h4> ${x} + ${y} = ${sum} <span class="display-result-red" </span> </h4>`
}

let addressForm = document.getElementById("addressForm")
addressForm.onsubmit = addressResults

function addressResults (event) {
    event.preventDefault()

    console.dir(event.target)
    let city = event.target.elements.city.value
    let state = event.target.elements.state.value
    let country = event.target.elements.country.value
    console.log(city)
    console.log(state)
    console.log(country)
    
    let submit= (city, state, country)  

    let addressResults = document.getElementById("addressResults")
     addressResults.innerHTML = `<h4> address:<span class="display-result-red"> ${city} , ${state}, ${country} </span> </h4>`

}
    
document.onkeydown = function (event) {
    console.log(event)
}

let ghostBoy = document.getElementById("👻")
console.log(ghostBoy)
ghostBoy.onmouseover = flipGhost
ghostBoy.onmouseout = flipGhost
ghostBoy.onclick = flipGhost



function flipGhost(event) {
    event.target.classList.toggle("flipped")
    console.log("Ghost should be flipped")
}
