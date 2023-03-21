// NASA va trimite pe Marte mai mulți roboți ce vor explora planeta. Aceștia vor naviga o suprafață 
// dreptunghiulară pentru a colecta diferite date ce vor fi transmise înapoi pe Pământ.

// Poziția unui robot este reprezentată de coordonatele sale x și y, precum și o literă care 
// să desemneze punctul cardinal spre care este orientat (N, E, S, V). Spre exemplu, dacă 
// poziția sa este 0, 0, N, atunci robotul este în colțul din stânga jos al platoului de pe Marte și
//  se îndreaptă spre nord (în sus).

// Pentru a controla robotul, NASA trimite un set de instrucțiuni care pot fi L 
// (schimbarea direcției 90 de grade la stânga), R (90 de grade la dreapta) și M 
// (deplasare cu o unitate și menține direcția). De exemplu, pentru un robot care 
// are coordonatele 0, 0, N, instrucțiunea M va însemna că robotul va avea coordonatele noi 0, 1, N.

// Cerințe:
// Setați coordonatele colțului dreapta sus al platoului dreptunghiular, având colțul stânga jos (0,0).
// Setați poziția robotului pe platou și orientarea sa.
// Pentru o listă de instrucțiuni, afișați poziția finală a robotului.

// Exemplu input:
// 5 5
// 1 2 N
// LMLMLMLMM

// Output așteptat:                             
// 1 3 N


// Dacă un roboțel primește o comandă ce îl face să iasă de pe hartă, toate
// comenzile ulterioare vor fi ignorate, iar la final va fi adăugat textul RIP după
// coordonatele sale înaintea ieșirii de pe hartă.

const moveLeft = (orientation) => {
    switch (orientation){            
        case "N": return "V";
        case "S": return "E";
        case "V": return "S";
        case "E": return "N";
    }
} 

const moveRight = (orientation) => {
    switch (orientation){
        case "N": return "E";
        case "S": return "V";
        case "V": return "N"; 
        case "E": return "S"; 
    }
}

const movement = (xPos, yPos, orientation,maxPosX, maxPosY) => {
    let rip = "";
    switch (orientation){
        case "N": if ( (yPos + 1) > maxPosY){ 
                    rip = "X";
                  } 
                  else { yPos += 1;}
                  return [xPos,yPos,orientation,rip];
        case "S": if ( (yPos - 1) < 0){ 
                    rip = "X";
                   }
                  else { yPos -= 1;}
                  return [xPos,yPos,orientation,rip];
        case "V": if ( (xPos - 1) < 0){ 
                    rip = "X"; 
                }
                  else { xPos -= 1; }
                  return [xPos,yPos,orientation,rip];
        case "E": if ( (xPos + 1) > maxPosX){ 
                    rip = "X";
                   }
                  else { xPos += 1;}
                    return [xPos,yPos,orientation,rip];
    }
}

const moveRobot = (position, instructions,endPos) => {
    const [maxPosX, maxPosY] = endPos;
    let [xPos, yPos, orientation] = position;

    for (const ins of instructions){
        switch (ins) {
            case "L":  {
                orientation = moveLeft(orientation);
                continue;
            }
            case "R":  {
                orientation = moveRight(orientation);
                continue;
            }
            case "M":  {
                let rip = "";
                [xPos,yPos,orientation,rip] = movement(xPos,yPos,orientation,maxPosX, maxPosY); 
                
                if (rip){ return xPos + " " + yPos + " " + orientation + " " + "RIP";} 
                
                continue;    
            }
            default: 
            console.log("S-a gasit o comanda gresita");
        }
    }
    return `${xPos} ${yPos} ${orientation}`;
}

const endPos = [5,5];

let position = [1, 5, "N"],
    instructions = "LMMRMLMRM";
console.log(moveRobot(position,instructions,endPos)); // 0 5 V RIP


position = [3, 3, "E"],
instructions = "MMRMMRMRRM";
console.log(moveRobot(position,instructions,endPos)); // 5 , 1, "E"


position = [3, 3, "S"],
instructions = "MMMM";
console.log(moveRobot(position,instructions,endPos)); // 3 , 0, "S"

position = [3, 3, "V"],
instructions = "MMMM";
console.log(moveRobot(position,instructions,endPos)); // 0 , 3, "V"
