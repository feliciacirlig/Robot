function Move(instructions){
    for(const ins of instructions){
        if ( ins==="L" && position[2]==="N"){
            position[2]="V"; continue;
        }
        if ( ins==="L" && position[2]==="S"){
            position[2]="E"; continue;
        }
        if( ins==="R" && position[2]==="N" ){
            position[2]="E"; continue;
        }
        if ( ins==="R" && position[2]==="S"){
            position[2]="V"; continue;
        }            
        if( ins==="R" && position[2]==="E"){
            position[2]="S"; continue;
        }
        if( ins==="R" && position[2]==="V"){
            position[2]="N"; continue;
        }
        if( ins==="L" && position[2]==="E"){
            position[2]="N"; continue;
        }
        if(ins==="L" && position[2]==="V"){
            position[2]="S"; continue;
        }

        if ( ins==="M" ){
            if (position[2] === "N"){
                position[1] += 1; continue;
            }
            if (position[2] === "S"){
                position[1] -=1 ; continue;
            }
            if (position[2] === "E"){
                position[0] +=1; continue;
            }
            if (position[2] === "V"){
                position[0] -= 1; continue;
            }
        }
    }
    return position;
}

position = [1, 2, "N"];

// const dimPlatou={
//     startPos:[0,0],
//     endPos:[5,5]
// };
console.log(Move("LMLMLMLMM"));
