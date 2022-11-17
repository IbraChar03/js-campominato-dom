let button = document.getElementById("btn");

 button.addEventListener("click",
 function(){
    let difficolta = document.getElementById("diff").value;
    let main = document.querySelector("main")
    main.style.backgroundColor = "#D6E4E5";

    let container = document.getElementById("container");
    const myArrNum2 = genArr(16, 1, 81);
    const myArrNum3 = genArr(16, 1, 49);
    let count=0;
   

    if (difficolta === "Facile"){
        document.getElementById("over").innerHTML = "";
        document.getElementById("container").innerHTML = "";
        const myArrNum1 = genArr(16, 1, 100);
        console.log(myArrNum1);
        for(let i = 1; i <= 100; i++ ){
            let elemento = nuovoElemento();
            elemento.style.width="calc(10% - 10px)";
            let num = elemento.innerHTML=i;
            container.append(elemento);
             
            elemento.addEventListener("click",
             function(){
                
                for(let b = 0; b < myArrNum1.length; b++){
                    if(myArrNum1.includes(num)){
                         elemento.classList.add("bomba");
                        
                    }   
                    else if (!myArrNum1.includes(num)){        
                        elemento.classList.add("notBomba");
                    }
                         
                }
                if(!myArrNum1.includes(num)){
                    count++;
                    let over = document.getElementById("over");
                    over.innerHTML=`Il tuo punteggio è di ${count} punti`;
                }
                if(myArrNum1.includes(num)){  
                    let over = document.getElementById("over");
                    over.innerHTML=`GAME OVER! Il tuo punteggio è di ${count} punti`;
                }

             }
             
            );
                 
        }  
      
    }
    
    else if (difficolta === "Medio"){
        document.getElementById("over").innerHTML = "";
        document.getElementById("container").innerHTML = "";
        const myArrNum2 = genArr(16, 1, 100);
        console.log(myArrNum2);
        for(let i = 1; i <= 81; i++ ){
            let elemento = nuovoElemento();
            elemento.style.width="calc(11% - 10px)";
            let num = elemento.innerHTML = i;
            container.append(elemento);
             
            elemento.addEventListener("click",
             function(){
                for(let b = 0; b < myArrNum2.length; b++){
                    if(myArrNum2.includes(num)){
                         elemento.classList.add("bomba");
                        
                    }   
                    else if (!myArrNum2.includes(num)){        
                        elemento.classList.add("notBomba");
                    }
                               
                }
                if(!myArrNum2.includes(num)){
                    count++;
                    let over = document.getElementById("over");
                    over.innerHTML=`Il tuo punteggio è di ${count} punti`;
                }
                if(myArrNum2.includes(num)){  
                    let over = document.getElementById("over");
                    over.innerHTML=`GAME OVER! Il tuo punteggio è di ${count} punti`;
                }

             }
            
            );
             
        }         
        
    }

    else if (difficolta === "Difficile"){
        document.getElementById("over").innerHTML = "";
        document.getElementById("container").innerHTML = "";
        const myArrNum3 = genArr(16, 1, 100);
        console.log(myArrNum3);
        for(let i = 1; i <= 49; i++ ){
            let elemento = nuovoElemento();
            elemento.style.width="calc(13% - 10px)";
            let num = elemento.innerHTML = i;
            container.append(elemento);
             
            elemento.addEventListener("click",
             function(){
                for(let b = 0; b < myArrNum3.length; b++){
                    if(myArrNum3.includes(num)){
                         elemento.classList.add("bomba");
                        
                    }   
                    else if (!myArrNum3.includes(num)){        
                        elemento.classList.add("notBomba");
                    }
                   
                 
                }
                if(!myArrNum3.includes(num)){
                    count++;
                    let over = document.getElementById("over");
                    over.innerHTML=`Il tuo punteggio è di ${count} punti`;
                }
                if(myArrNum3.includes(num)){  
                    let over = document.getElementById("over");
                    over.innerHTML=`GAME OVER! Il tuo punteggio è di ${count} punti`;
                }

             }
            
            );
    
        }  
        
    }
 }

 );
 

function nuovoElemento(){
     let nElemento = document.createElement("div");
     nElemento.classList.add("box");
     return nElemento;
}

function randomInteger(min, max){
    return ( Math.floor(Math.random() * ((max + 1) -min) + min));
}

function genArr(quanti, minNum, maxNum){

    const newArr = [];

    while(newArr.length < quanti){
        let newNumber = randomInteger(minNum, maxNum);

        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }
    return newArr;
}

