var num = Math.floor(Math.random()*10);

for (var i=1; i <=8; i++){
    
    var input= parseInt(prompt("Guess number"+i+": "));
    if(num>input){
        console.log(" Low");
    }

    else if(num<input){
        console.log(" High");
    }

    else{
        console.log(" Good ");
    }
}