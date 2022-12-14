
// Kommentiere hier (b)
// Zwei Variablen ("circle1" und "circle2") werden erstellt, in welchen jeweils eine ID ("#circ1" und "#circ2") abgespeichert wird um zugriff auf die Attribute vom html-Code zu kriegen.
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 1
let m = 100**digits
let repetitions = 1
let count = 0
let textcontent = Element.textContent("#Zahl")

function start() {
    running = true
    circle1.setAttribute("cx", 80)
    circle2.setAttribute("cx", 20)
    count = 0
    v1 = -1
    v2 = 0
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // Zwei Variablen werden innerhalb einer Funktion erstellt. Von den Variablen "circle1" oder "circle2" wird jeweils die Attribute "cx" abgerufen, in eine rationale Zahl umschrieben und dann jeweils in den Variablen "cx1" und "cx2" abgespeichert.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop

    for (digits = 5, repetitions = 10000 ; digits === repetitions; i++) {

    if (cx1 > cx2 + 10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // In der Variable "cx1" wird der aktuelle Wert von sich selber plus der Wert von "v1" durch den Wert der Variablen "repetitions" abgespeichert. Das gleiche gilt für "cx2" mit "v2" statt "v1".
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    }

    // End Loop
    
    // Kommentiere hier (e)
    // Der Wert von "cx" bei circle1 wird mit dem Wert von der Variablen "cx1" überschrieben und das gleiche passiert mit dem Wert "cx" beim circle2 mit der Variablen "cx2".
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Wenn "running" wahr ist ("true" entspricht) soll die Framerate vom Fenster abgerufen werden und die Funktion "animationLoop" jedesmal abgerufen werden.
    if ( cx2 <= 95 ) {
        window.requestAnimationFrame(animationLoop)
    }

    if (cx2 + 5 === cx1 - 5 ) {
    count = count++
    }

    if (cx2 === 5) {
        v2 = v2 * (-1)
        count = count++
    }
}


function newVelocity(v1, v2) {
    return {
        v1: (m * v1 + (2 * v2 - v1)) / (m + 1),
        v2: (v2 + m * (2 * v1 - v2)) / (m + 1)
    }
}

function displayNumber(textcontent) {
    return (count / 10**digits).toFixed(digits)
}

function stop() {
    running = false
}