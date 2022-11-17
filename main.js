let button = document.getElementById("btn");

 button.addEventListener("click",
 function(){
    let difficolta = document.getElementById("diff").value;
    let main = document.querySelector("main")
    main.style.backgroundColor = "#D6E4E5";

    let container = document.getElementById("container");
    const myArrNum2 = genArr(16, 1, 81);
    const myArrNum3 = genArr(16, 1, 49);
   

    if (difficolta === "Facile"){
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
                for(let b=0; b < myArrNum1.length; b++){
                     if(myArrNum1[b] === num){
                         elemento.classList.add("bomba");
                         let over=document.getElementById("over");
                         over.innerHTML="GAME OVER";
                     }     
                 
                }
             }
             
            );
            
        }  
      
    }
    
    else if (difficolta === "Medio"){
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
                for(let b=0; b< myArrNum2.length;b++){
                    if(myArrNum2[b] === num){
                        elemento.classList.add("bomba");
                        let over=document.getElementById("over");
                        over.innerHTML="GAME OVER";
                    }
                
                }

             }
            
            );
             
        }         
        
    }

    else if (difficolta === "Difficile"){
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
                for(let b=0; b< myArrNum3.length;b++){
                    if(myArrNum3[b] === num){
                        elemento.classList.add("bomba");
                         let over=document.getElementById("over");
                         over.innerHTML="GAME OVER";
                    }
                
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

    const newArr=[];

    while(newArr.length < quanti){
        let newNumber=randomInteger(minNum, maxNum);

        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }
    return newArr;
}
