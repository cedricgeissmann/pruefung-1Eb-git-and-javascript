
// Kommentiere hier (b)
// const sagt das es für alle circle1/2 elemente gilt
//jedes mal wennn unter einer function document.query.. aufgerufen wird, wird circ1/2 
//automatisch auch uslösen welche im htmldefiniert sind.
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 5
let m = 100**digits
let repetitions = 10000
let count = 0

function start() {
    running = true
    circle1.setAttribute("cx", 80)
    circle2.setAttribute("cx", 20)
    count = + 1
    v1 = -1
    v2 = 0
    if ("#circle2" === v2)
    window.requestAnimationFrame(animationLoop)
}

function stop(){
    running = false
    if (cx2 <= 95){
        window.requestAnimationFrame
}
    }


function animationLoop() {
    
    // Kommentiere hier (c)    
    // in dieser function wird das was das attribut uns angiebt in einer ganzen zahl verwandelt.
    // die zahlen können nur in ganzen schritten arbeiten weil das parse float auslöst also (1,2,3..) nicht in komma zahlen.
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1 > cx2 +10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }


    
       
        let repetitions = parseInt(read())
    
        
        for ( let i = 0; i <= repetitions; i++) {
            print(i)
        }

    // Kommentiere hier (d)
    // hier wird gezeigt das nach jedem button druck die velocytie beschleunigt & wiederholt wird 
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    //hier wird gesagt das cx un cx1/c2 immer zussammen ausgelöst werden.

    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    //  wenn running = true ist wird die function animationLoop ausgelsöt
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