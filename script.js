
// Kommentiere hier (b)
// Mit dem Schlüsselwort const werden zwei Variablen, circle1 und circle2, definiert, die auf die Elemente auf der Seite mit den IDs "#circ1" bzw. 
//"#circ2" gesetzt werden. Mit dem Schlüsselwort let werden mehrere andere Variablen definiert, darunter running, v1, v2, digits, m, repetitions und count, die alle anfänglich auf 0, -1, 0, 1, 100, 1 bzw. 0 gesetzt sind. 
// Diese Variablen werden wahrscheinlich zur Steuerung der Animation verwendet. 
//Die Funktion start() wird definiert, um die Variable running auf true zu setzen und die cx-Attribute von circle1 und circle2 auf bestimmte Werte zu setzen. 
//Sie setzt auch die Variable count auf 0 und die Variablen v1 und v2 auf -1 bzw. 0. Schließlich wird die Funktion window.requestAnimationFrame() mit der Funktion animationLoop als Argument aufgerufen, was dazu führt, dass animationLoop wiederholt mit einer vom Browser festgelegten Rate aufgerufen wird. Die Funktion animationLoop() ist in diesem Code nicht definiert, daher ist nicht klar, was sie tut.


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
    const button = document.querySelector("START");

    running = true
    circle1.setAttribute("cx", 80)
    circle2.setAttribute("cx", 20)
    count = 0
    v1 = -1
    v2 = 0
    window.requestAnimationFrame(animationLoop)

}
document.getElementById("#Zahl").textContent = displayNumber();



// Hab die Funktion requestAnimationFrame dennoch nicht gefunden. Demnach hab ich einfach eine neue erstellt.
function requestAnimationFrame() {
if (cx2 <= 95) {
  requestAnimationFrame();

}
}



function animationLoop() {
    
    // Kommentiere hier (c)    
    // Dieser Code definiert 2 Variabeln, "cx1" und "cx2".
    // Er liest die x-Koordinate des Mittelpunks von den beiden Kreisen aus und speichert sie ab.
    // Danach wird eine bedingte Anweisung ausgeführt, die die neuen Geschwindigkeiten der beiden Kreise berechnet, falls eine bestimmte Bedingung erfüllt ist (in diesem Fall ist die Bedingung "false", sodass die Berechnung der neuen Geschwindigkeiten nicht ausgeführt wird).
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1 > cx2 + 10) {
        ({v1, v2} = newVelocity(v1, v2));
      } if (circlesCollide()) {
        count++;
      }
      if (blueCircleTouchesLeftEdge()) {
        v1 = -v1;
        count += 2;
      }
      
for (let i = 0; i < repititions; i++) {
    // Code, der in der Schleife ausgeführt werden soll
  }
  
  // 4h verstehe es nicht ganz aber grundäsätzlich: Wenn der Befehl document.getElementById('Zahl').textContent = displayNumber(); ausgeführt wird, wird der textContent des Elements mit der ID Zahl auf das Ergebnis der Funktion displayNumber gesetzt.
  

      

    // Kommentiere hier (d)
    // Dieser Code fügt die aktuellen Geschwindigkeiten der beiden Kreise zu ihren x-Koordinaten hinzu, um die neuen x-Koordinaten der Kreismittelpunkte zu berechnen.
    // Hierbei wird die Geschwindigkeit durch die Anzahl ("repetitions") geteilt, um die Änderung der x-Koordinate  (in kleinen Schritten) darzustellen.
    // Nach Ausführung dieser Anweisung werden die neuen x-Koordinaten in den Variablen "cx1" und "cx2" gespeichert.
    let digits = 5;
    let repetitions = 10000;
    
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // Kommentiere hier (e)
    // Dieser Code ändert die x-Koordinaten der beiden Kreise, indem er die neu berechneten Werte in den Kreiselementen setzt. 
    //SetAttribute-Methode wird verwendet, um das Attribut "cx"  (das die x-Koordinate des Kreismittelpunkts darstellt) in den beiden Kreiselementen auf die neuen Werte in den Variablen cx1 und cx2 zu setzen. 
    //Auf diese Weise werden die Kreise an ihren neuen Positionen auf der x-Achse gezeichnet.
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // Dieser Code enthält 3 Funktionen animationLoop, newVelocity und displaynumber. 
    // Funktion animationLoop  ist eine Schleife, die in regelmäßigen Abständen aufgerufen wird und die Bewegung der beiden Kreise auf dem Bildschirm animiert.
    // Funktion newVelocity berechnet die neuen Geschwindigkeiten der beiden Kreise basierend auf ihren aktuellen Geschwindigkeiten und einem Faktor "m".
    // Funktion Displaynumber wandelt eine gegebene Zahl in einen String um und rundet sie auf eine bestimmte Anzahl von Dezimalstellen (digits) ab.
    // Schleife animationLoop wird nur ausgeführt, wenn der Wert der Variablen "running" "true" ist.
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

function stop () {
    const button = document.querySelector("STOP");
    function stop() {
     running = false;
      }

}


// background-color: rgb(98, 135, 71); ich glaube das ist von alice dswg entferne ich das bei aufgabe c (hatte beide veränderungen akzeptiert und sah nicht was wem gehörte)
