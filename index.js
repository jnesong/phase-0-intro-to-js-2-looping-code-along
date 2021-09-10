// Code your solutions in this file
/* for ([initialization]; [condition]; [iteration]) {
    [loop body]
  }
*/

const hobbits = ["Frodo", "Sam", "Merry", "Pippin"];
const birthday = "Bilbo Baggins' birthday"

function writeCards(names, event){
    let hobbitMessages = [];
    for (let i = 0; i < names.length; i++){
        hobbitMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return hobbitMessages
}

console.log(writeCards(hobbits, birthday));

/*while ([condition]) {
  [loop body]
} 
*/

function countDown(seconds){
    while (seconds>=0){
        console.log(seconds--);
    }
}

countDown(10);