
// Kommentiere hier (b)
// hier werden die zwei kreise welche auf der webseite zu sehen sind verlinkt.
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 1
let m = 100**digits
let repetitions = 1
let count = 0

function start() {
    running = true
    circle1.setAttribute("cx", 80)
    circle2.setAttribute("cx", 20)
    count = 0
    v1 = -1
    v2 = 0
    window.requestAnimationFrame(animationLoop)
}

function stop() {
    running = false
    window.requestAnimationFrame( cx2 <=95) 
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // Hier wird den kreisen befohlen, dass sie sich in der x Achse bewegen werden.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (false) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // hier wird angezeigt, dass cx1 und v1(-1) zusammen cx1 geben. Dies beschreibt die Bewegung der Kreise auf der x-Achse.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Hier werden Attribute gesetzt (e)
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Hier wird gesagt, dass running den gleichen Wert hat als true. Es werden 3 = verwendet, denn sont heisst das nicht, dass die zwei elemente gleich sind.
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