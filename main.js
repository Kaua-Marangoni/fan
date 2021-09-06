const button1 = document.getElementById("button-vel-1")
const button2 = document.getElementById("button-vel-2")
const button3 = document.getElementById("button-vel-3")
const buttonOff = document.getElementById("button-off")
const ventilador = document.querySelector("img")

button1.addEventListener("click", () => {
    ventilador.style.animation = "move .45s infinite linear"
})

button2.addEventListener("click", () => {
    ventilador.style.animation = "move .35s infinite linear"
})

button3.addEventListener("click", () => {
    ventilador.style.animation = "move .25s infinite linear"
})

buttonOff.addEventListener("click", () => {
    ventilador.style.animation = ""
})