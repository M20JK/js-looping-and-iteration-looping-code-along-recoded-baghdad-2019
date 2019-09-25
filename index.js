// Code your solutions in this file
function writeCards(name , eventName){
  var thank = [];
  for(let r = 0 ; r < name.length; r++ ){
   
<<<<<<< HEAD
   thank[r] = (`Thank you, ${name[r]}, for the wonderful ${eventName} gift!`);
=======
   thank[r] = (`Thank you, ${name[r]}, for your special gift in my ${eventName}!`);
>>>>>>> 14aa4a7ea6f018756060043d24e581c3c5c14373
  }
  
  return thank ;
  
  
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countdown(numb){
    for (let d = numb ; d >= 0 ; d --){
    console.log(d);
    }

}
countdown(10)