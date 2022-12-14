
// Kommentiere hier (b) 
// Hier verbinden Sie die circles mit dem html und it dem const sagen sie, dass nur dieser circ gemeint ist.
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

function animationLoop() {
    
    // Kommentiere hier (c)    
    // Hier sagen sie, dass circle1 und circle2 das Attribut cx holen soll und Sie sagen, dass es eine Bewegung ist und nicht eine Aufzählung.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1 > cx + 10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // Hier sagen Sie, dass cx1 cx1 plus v1 entspricht. D.h. dass sie dem cx eine neue Funktion geben und dass diese repetiert wird. Das selbe geschieht mit dem cx2.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    // Hier geben Sie dem circle1 das Attribut cx und das nennen Sie cx1. Das selbe machen Sie mit circle2 doch dieses wird cx2gennant.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Hier sagen Sie, dass wen die Funktion running true(also richitg) ist, soll die Animation geloopt werden.
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

function STOP() {
    running = false
}

function requestAnimationFrame () {
    if (cx2 <= 95) {
        window.requestAnimationFrame(animationLoop)
    }
}

function count() {
    if (circle1 == circle2) {
        count = count + 1
    }

}
