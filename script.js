
// Kommentiere hier (b)
// Der Kreis1 soll immer konstant bleiben und sucht  die Id--> circ1 im html.
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 5
let m = 100**digits
let repetitions = 10000
let count = 0

function start(Start) {
    running = true
    circle1.setAttribute("cx", 80)
    circle2.setAttribute("cx", 20)
    count = 0
    v1 = -1
    v2 = 0
    window.requestAnimationFrame(animationLoop)
    if  circ1 + circ2 {
        let ( let count = 0; i <= upperBound; count=count+1) 
    }
    
}

function stop(STOP) {
    running = false
    
        window.requestAnimationFrame( if 
            cx2 <= 95  ) 
    
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // suche cx, alle zahlen auch mit Kommastellen und speichere das im cx1.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1> cx2 + 10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    function () {
        
        let upperBound = cx1(read())
        let upperBound = cx2(read())
        
        for ( let cx1, cx2= 0; i < upperBound; i++ till repetitions) {
            
        }
    }

    // Kommentiere hier (d)
    // cx1 + v1 durch die Anzahl Durchläufe soll in cx1 gespeichert werden
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    circle1 soll cx auf cx1 setzen
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Fals running den geleichen Wert und Typ haben, und dies wahr ist, soll es im Window mit dem AnimationFrame den AnimationLoop anfragen.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}


function newVelocity(v1, v2) {
    return {
        v1: (m * v1 + (2 * v2 - v1)) / (m + 1),
        v2: (v2 + m * (2 * v1 - v2)) / (m + 1)
    }

    if  circ2 touches left border 
    let num v2= -num + count= +1 

    }
}

function displayNumber(#zahl) {
    return (count / 10**digits).toFixed(digits)
}

// 1/10 *9 = 90