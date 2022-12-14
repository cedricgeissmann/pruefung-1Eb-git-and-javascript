
// Kommentiere hier (b)
// Mit diesem const sagt man das der Variable circle1 der circ1 (svg element) aus dem html zugeordnet wird. 
//Somit kann man nun den Begriff circle1 für alle functionen verwenden, weil man es am anfang definiert hat.
//das gleiche macht man mit dem circle2, also man ordnet das circ2 der variable cicle2 zu.
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
    // Man ordnet nun der Variable cx1 das attribut cx vom circle1, also dem svg element #circ1, zu und sagt, dass cx eine Zahl sein muss, es muss aber keine ganze Zahl sein, es kann auch eine Kommazahl sein.
    //das gleich macht man mit cx2, einfach dass man den circle2, also das svg element #circ2 nimmt.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1>cx2+10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // man sagt nun, dass das cx1, welches man oben definiert hat, mit v1 addiert wird. v1 ist gleich 0. dann muss man das durch repetitions rechnen, also durch 1.
    // man rechnet also cx1+0/1. das gleiche macht man bei cx2.
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    //nun sagt man, dass der computer für circle1 respective circle2 cx und cx1 respective cx2 ausgeben muss. und nicht wie am anfang nur cx.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // mit dem sagt man, dass wenn das running richtig ist, dann soll er im Fenster eine animation Loop zeigen.
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

function stop(){
    running === false

    if (cx2 <=95) {
        window.requestAnimationFrame(animationLoop)
    }
}


function count(){

    if (cx1 = cx2) {
        count = count + 1
    }

}

function circ2(){
    if (cx2 = 100){
        v1 * (-1)
        count = count +1
    }
}