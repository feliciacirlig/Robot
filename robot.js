function Move(instructions){
    for(const ins of instructions){
            if(ins==="L" && (position[2]==="N" || position[2]==="S")){
                position[2]="V";
        }
            if(ins==="R" && (position[2]==="N" || position[2]==="S")){
                position[2]="E";
            }
             if(ins==="R" && position[2]==="E"){
                position[2]="S";
            }
            if(ins==="R" && position[2]==="V"){
                position[2]="N";
         }
         if(ins==="L" && position[2]==="E"){
                position[2]="N";
            }
            if(ins==="L" && position[2]==="V"){
                position[2]="S";
         }

         if(ins==="M"){
            if(position[2]==="N"){
                position[1]+=1;
            }
             if(position[2]==="S"){
                position[1]-=1;
            }
             if(position[2]==="E"){
                position[0]+=1;
            }
            if(position[2]==="V"){
                position[0]-=1;
            }
         }
    }
    return position;
}

// let mapDim = [5, 5], 
position = [1, 2, "N"];

const dimPlatou={
    startPos:[0,0],
    endPos:[5,5]
};
console.log(Move("LMLMLMLMM"));
