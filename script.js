
// Kommentiere hier (b)
// Es werden konstante Elemente namens "circle1" und "circle2" erstellt, welchen jeweils die Werte von dem ersten Element im Dokument mit der ID "#circ1" und "#circ2" zugeschrieben werden. Da es ein kosntantes Element ist, kann der Wert im nachhinein nicht verändert werden.
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
    // Zuerst wird das Attribut "cx" von jeweils circle1 und circle2 ausgelesen. Mit parseFloat wird dies anschliessend in eine Zahl mit Dezimalstellen umgewandelt. Diese Zahl wird dann jeweils als Wert von cx1 und cx2 zugewiesen. Hier benutzt man parseFloat und nicht parseInt, damit man eine genauere Zahl bekommt. (parseInt ist eine ganze Zahl ohne Dezimalstellen).
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (false) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // Der Wert von cx1 und cx2 wird hier verändert, indem man den Wert von v1 zu cx1 addiert und den Wert von v2 zu cx2 addiert. Damit erhöht man die x koordinate der Kreise exponentiell, da der Wert von v1 und v2 bei jedem Schleifendurchlauf grösser wird. Somit bewegen sich beide Kreise nach unten, mit einer immer höher werdenden Geschwindigkeit. Ebenfalls wird die Zahl zum schluss durch den Wert "repetitions" dividiert, also durch 1 --> ändert nichts am Code.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    // Die veränderten Werte von cx1 und cx2 werden nun wieder den Kreisen zugeordnet. Mit dem Befehl setAttribute wählt man ein gewisses Attribut eines Elementes aus und gibt den neuen Wert an, welches dieses Attribut kriegen sollte.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Hier stellt man eine if Bedingung. Hier lautet sie, dass "running" true sein muss. Ist dies so, dann soll beim nächsten Neu-Laden der Seite, die Funktion animationLoop nocheinmals ausgeführt werden. Dies führt zu einer unendlichen Schleife der Funktion animationLoop, solange running= true ist. Zu Beginn ist running false, aber sobald man start drückt wird es zu true und somit ensteht die Schelife, da mit dem Drücken von Start auch automatisch animationLoop ausgeführt wird.
    if ( running === true ) {
        if (cx2 <= 95) {
        
        window.requestAnimationFrame(animationLoop)}
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


function Stop() {
running = false 
}