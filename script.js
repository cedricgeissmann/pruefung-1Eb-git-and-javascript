
// Kommentiere hier (b)
// Hier werden 2 neue Variablen definiert / Element zugeordnet. (Variablen mit const sind eigentlich Konstanten). Der Variable circle 1 wird
// das Element mit der id circ1 zugeordnet und der Variabel circle2 wird das Element mit der id circ2 zugeordnet. 
//const bedeutet das es fix zugeordnet ist und man dieser Variable später kein Anderes Element / Wert zuweisen kann.
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 1
let m = 100**digits
let repetitions = 1
let count = 0
let zahl = 0

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
    // Hier wird den variablen ein Wert zugeordnet. Der Variable cx1 wird das attribut "cx" des Elements circle1 zugeordnet. Dieses attribut wird zufor durch parseFloat in eine Zahl (mit Komma stellen) umgewandelt. 
    // bei cx2 geschieht das selbe mit dem "cx" attribut des Elements circle2.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    for(zahl = 0; zahl === 100; 1++){
    if (cx1 > cx2 + 10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // Hier wird cx1 ein neuer wert zugeordnet, das ist möglich weil es let und nicht const ist. Der neue Wert entspricht dem alten cx plus dem Wert v1 der zufor noch durch den Wert von repetitions geteilt wird. Mit cx2 passiert das gleiche einfach mit anderen Werten.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    }   // End Loop
    
    // Kommentiere hier (e) das attribut "cx" des Elements circle1 wird auf den Wert cx1 gesetzt. Das gleiche passiert mit dem "cx" des circle2.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Das hier ist eine Bedingung die besagt das beim Refreshen oder neuladen der Seite die Funktion animationloop ausgelöst wird, wenn die variable running true ist, also auf true gesetzt ist.
    if ( running === true ) {
        if (cx2 <= 95) {
            window.requestAnimationFrame(animationLoop)
        }
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

function stop() {
    running = false
}

if (circle1.cx + 5 === circle2.cx - 5) {
    count = count + 1
}

if (circle2.cx === 5) {
    v2 = v2*-1
    count = count + 1
}