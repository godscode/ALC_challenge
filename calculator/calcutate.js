var input1;
var input2;
var result;
var option;



option = prompt("1.addition\n 2.multiplication\n 3. substraction\n 4. division \nchoose operation:");
input1 =parseInt(prompt("First number: "));
input2 =parseInt(prompt("Second number: "));
switch(option){
    case '1':
        result = input1 + input2;
        break;
    case '2':
        result = input1 * input2;
        break;
    case '3':
        result = input1 - input2;
        break;
    case '4':
        result = input1 / input2;
        break;
    default:
        console.log("Invalid Input");
}

console.log(result);