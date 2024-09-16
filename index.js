// let welcomeEl = document.getElementById('welcome-el')

// let name = "Abinesh"
// let greeting = "Hi, my name is"

// let message = greeting + " " + name
// welcomeEl.innerText = message

// welcomeEl.innerText = message + "👋🏻"


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    let saveMessage = count + " - "
    saveEl.textContent +=saveMessage
    count = 0
    countEl.innerText = count
}