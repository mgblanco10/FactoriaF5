function age (num){
    return num  < 18 ? "To young" : "OLD";
 }
 console.log(age(17));
 console.log(age(31));
 console.log(age(18));
 
 function ages (num){
     if (num < 18){
         return "To young sin ternarios";
     }else{
       return  "OLD sin ternarios";  
     }
 }
 
 console.log(ages(17));
 console.log(ages(32));
 
 function soyRosa (color){
     return color == 'rosa'? 'Si soy rosa':`No soy ${color}` 
 }
 console.log(soyRosa('rosa'));
 console.log(soyRosa('azul'));
 console.log(soyRosa('verde'));