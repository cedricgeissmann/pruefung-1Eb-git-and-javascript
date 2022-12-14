
// Kommentiere hier (b)
// Die untenstehenden Codezeilen beschreiben die beiden Variabeln circle1, wie circle2, 
//welche jeweils einem Kreiselement aus dem index mit den ID's circ1 und circ2 zugewiesen wurden.
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



}









function animationLoop() {
    
    // Kommentiere hier (c)    
    // Mit diesen Codezeilen werden jeweils die Variabeln cx1 und cx2 einem gewissen Zahlenwert (cx Werte der Kreise) durch 
    //den Zuweisungsoperator zugeordnet. ParseFloat ermöglicht dabei die Zuweisung eines ganz klaren Zahlenwertes!
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (false) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // In diesen Codezeilen passiert etwas sehr Elementares, denn hier werden die Werte für die zuvor ausgelesenen Variabeln
    // cx1 und cx2 neu zugeordnet, da nun die jeweilige Variable gleich dem ausgelesenen Werte plus die jeweiligen dazukommenden Variablen (v1/v2) 
    //dividiert durch die Konstante (repetitions) sind.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    //In diesen Codezeilen werden nun schlussendlich noch die zuvor neu zugeordneten Variabeln cx1 und cx2, den beiden Variabeln
    //circle1 und circle2 zugeordnet, beziehungsweise deren cx Werte mit den Werten aus cx1 und cx2 überschrieben.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Diese letzte Codezeile ist nun noch einmal sehr wichtig, weil sie die Funktionalität des gesammten Codes ausmacht:
    // Die Bedingung if (running===true) überprüft ob die Bedingung gegeben ist (Wenn sie einmal durch start() gegeben ist, ist sie
    //dauerhaft gegeben und die darauf folgende Funktion wird ausgeführt, welche das Performing einer neuen Animation wünscht, durch was
    //die Funktion animationLoop() ausgeführt wird. Folge dessen ist eine sich immer wieder wiederholende Schleife das Resultat!)
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