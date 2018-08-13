function getTriangle(){
var a = parseFloat(prompt("side a"));
var b = parseFloat(prompt("side b"));
var c = parseFloat(prompt("side c"));
/* var determine = function(a, b, c){
if (a === b && b === c && a === c){
  alert("Equilateral Triange");
    }

else if ((a === b && b === a) (a != c && b !== C));
alert("Isosceles");

}
 determine(); */


 if(a===b && a===c && b===c){
alert("Equilateral");
}
else if(a===b || a===c || b===c){
alert("Isosceles");
}
else if((a+b)<= c || (a+c)<=b || (b+c)<=a) {
alert("Not a Triangle");
}
else{
alert("Scalar");
}
}
getTriangle();



Collapse 
