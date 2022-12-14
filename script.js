
// Kommentiere hier (b)
// Man setzt den Kreis mit der Id circ1 und circ2, damit man mit diesem Arbeiten kann. Den Kreis findet man in der html-Datei. 
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 1
let m = 100**digits
let repetitions = 1
let count = 0

function START() {
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
    // mit dem parseFloat kann man alle Zahlen auch mit Kommastellen angeben lassen die dann dazuführen dass sich der Attribute "cx" verändert.(kann auch beispielsweise "cy" sein)
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (false) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // eine neue Bedingung wird für das Attribute cx1 und cx2 wird bestimmt.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    // hier wird der Kreis mit seinen neuen Attribut-Werten/Bedingungen gesetzt.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // "===" mit dem wird untersucht ob der Wert auf der linken Seite des "===" gleich ist wie der auf der rechten Seite.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}


function newVelocity(v1, v2) {
    return {
        v1: (m * v1 + (2 * v2 - v1)) / (m + 1),
        v2: (v2 + m * (2 * v1 - v2)) / (m + 1)
    }
}

function displayNumber() {
    return (count / 10**digits).toFixed(digits)
}