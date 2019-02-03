var g;
g = prompt("Enter a string: ");
var o = [];

for(var i =0; i<g.length; i++){
	o[i] = g.charAt(i);
}

console.log(o[0]+o[1]+o[2]);
console.log(o[0]+o[2]+o[1]);
console.log(o[2]+o[0]+o[1]);
console.log(o[2]+o[1]+o[0]);
console.log(o[1]+o[2]+o[0]);
console.log(o[1]+o[0]+o[2]);


