// Code your solutions in this file

function writeCards(names, event){

    const newArray = [];
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return newArray;
}
console.log(writeCards(["Ada", "Brendan", "Ali"],"birthday"));


function countDown(posInt){
   
    let count = 0;
    while (count <= posInt){
        console.log(count++);
        debugger;
    }
}
countDown(10);


