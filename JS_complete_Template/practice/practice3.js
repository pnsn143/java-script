var array = [10,20,30,40];
var output = array.join(" # ");
console.log(output);
document.getElementById('display').innerHTML = output;

var prop = array[3];
prop = "enter the 3st position no : " + prop;
console.log(prop);
document.getElementById('display1').innerHTML = prop;

var prop = array[6];
prop = "entered position no is : " + prop;
console.log(prop);
document.getElementById('display2').innerHTML = prop;

array[4] = 50;
array = "adding the extra element :" + array ;
console.log(array);
document.getElementById('display3').innerHTML = array;


var arrLen = array.length;
console.log('length of the array : ' + arrLen);

var array1 = [10,20,30,40,50,60];
output = "before :" + array1.join(" - ");
console.log(output);
document.getElementById('display4').innerHTML = output;

array1.reverse();
output = "reversing the array : " + array1.join('*');
console.log(output);
document.getElementById('display5').innerHTML = output;

var array2 = [10,20,30,40,50,60,70,80];
output = "before set is : " + array2.join(" & ");
console.log(output);
document.getElementById('display6').innerHTML = output;

array2.shift();
output = "shifting the set : " + array2;
console.log(output);
document.getElementById('display7').innerHTML = output;


var array3 = [10,20,30,40,50,60,70,80];
output = "before set is : " + array3.join(" _ ");
console.log(output);
document.getElementById('display8').innerHTML = output;

array3.unshift(100);
output = "unshift the set : " + array3;
console.log(output);
document.getElementById('display9').innerHTML = output;



var array4 = [ 10,20,30,40,50,60,70,80];
output = "before set is : " +  array4.join(" @ ");
console.log(output);
document.getElementById('display10').innerHTML = output;

array4.pop();
output = "pop the set : " + array4;
console.log(output);
document.getElementById('display11').innerHTML = output;

var array5 = [ 10,20,30,40,50,60,70,80];
output = "before set is : " +  array5.join(" @ ");
console.log(output);
document.getElementById('display12').innerHTML = output;

array5.push(90,100);
output = "push the set : " + array5;
console.log(output);
document.getElementById('display13').innerHTML = output;

var array6 = [ 10,20,30,40,50,60,70,80];
output = "before set is : " +  array6.join(" @ ");
console.log(output);
document.getElementById('display14').innerHTML = output;

array6.splice(1,2);
output = "pop the set : " + array6;
console.log(output);
document.getElementById('display15').innerHTML = output;

array7 = [10,20,30,40,50];
output = "Array7 value : " + array7.join(',');
console.log(output);
document.getElementById('display15').innerHTML = output;

var array8 = array7.slice();
output = "Array8 values : " + array8.join(' , ');
console.log(output);
document.getElementById('display16').innerHTML = output;


array9 = [10,20,30,40];
var indexOfTen = array9.indexOf(20);
console.log(indexOfTen);
document.getElementById('display17').innerHTML = indexOfTen;

var car = {
     name : 'rangerover',
    model : 'highend',
    100 : 'black'
};
var prop = car.name;
prop = "car name is : " + prop;
console.log(prop);
document.getElementById('display18').innerHTML = prop;

var prop = car.model;
var prop = car['100'];
prop = "the color of car is : " + prop;
console.log(prop);
document.getElementById('display19').innerHTML = prop;












