// Code your solutions in this file
function writeCards(name , eventName){
  var thank = [];
  for(let r = 0 ; r < name.length; r++ ){
   
   thank[r] = (`Thank you, ${name[r]}, for the wonderful ${eventName} gift!`);
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