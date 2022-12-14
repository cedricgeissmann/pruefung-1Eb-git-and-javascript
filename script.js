
// Es werden die zwei svg Kreise aus dem HTML geholt und ihnen wirden die Konstanten circle1 und circle2 gegeben. Mit dem # wird diee ID angegeben. Nun kann man im Javascript mit den zwei Konstanten an den Kreisen arbeiten   
// 
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 5
let m = 100**digits
let repetitions = 1000
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
    
    // cx1 und cx2 erhalten ein Attribut, also wofüt sie stehen(was aus dem svg sie darstellen). Zuerst wird noch angegeben, dass sie eine Kommazahl darstellen können(parseFloat).    
    // 
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1 > cx2 + 10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }


    // Wenn cx1 und cx2 kollidieren, also den glichen cx Wert haben, dann soll der count um 1 höher schalten.
    if (cx1 = cx2) {
        count = count + 1
    }


    // Wenn der blaue Kreis (cx2) den linken Rand berührt, wird bei v1 das vorzeichen gewechselt. Danach wird noch der Count um 1 höher gestellt.
    if (cx2 < 0) {
        v2 = v2 * (-1)
        count = count + 1
    }

    // cx1 und cx2 erhalten einen neuen Wert. Zu ihnen wird eine Geschwindigkeit hinzugerechent und dann noch durch die Anzahl Wiederholungen geteilt. 
    // 
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop

    // Hier werden cx1 und cx2 wieder auf ihre ursprünglichen Werte gesetzt. Der zuvor neu hinzugefügte Wert wird wieder gelöscht.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Wenn der running-Wert nun stimmt (true ist, anstatt wie ganz am Anfang falsch), dann wird die Animation wieder neu gestartet. Also das Fenster in dem sie ist wird wieder geöffnet.
    // 


    if (cx2 <= 95) {
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

function stop() {
    return (running === false)
}