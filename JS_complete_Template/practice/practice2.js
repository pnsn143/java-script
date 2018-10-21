function image1() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery1.jpeg');
    document.getElementById('image1').style.color='blue';

}
function image2() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery2.jpeg');
    document.getElementById('image2').style.color='green';

}
function image3() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery3.jpeg');
    document.getElementById('image3').style.color='orange';

}
function image4() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery1.jpeg');
    document.getElementById('image4').style.color='yellow';
}
function image5() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery2.jpeg');
    document.getElementById('image5').style.color='white';
}
function image6() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery3.jpeg');
    document.getElementById('image6').style.color='browne';


}
function image7() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery1.jpeg');
    document.getElementById('image7').style.color='orangered';
}
function image8() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery2.jpeg');
    document.getElementById('image8').style.color='violet';
}
function image9() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery3.jpeg');
    document.getElementById('image9').style.color='darkgreen';

}
function image10() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery1.jpeg');
    document.getElementById('image10').style.color='darkgray';
}
function image11() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery2.jpeg');
    document.getElementById('image11').style.color='violet';

}
function image12() {
    document.getElementById('img-1').setAttribute('src' , 'img/gallery3.jpeg');
    document.getElementById('image12').style.color='darkorange';

}
var today= new Date();
console.log(today);
document.getElementById('display').innerHTML= today;


var a = 10;
var b = 20;
var sum = a + b ;
output = "the sum of the values is :" + sum;
console.log(output);
document.getElementById('h3').innerHTML = output;


var a = 10;
var b = 20;
var mul = a * b ;
output = "the mul of the values is :" + mul;
console.log(output);
document.getElementById('h31').innerHTML = output;

var x = 200;
var y = 300;
var z = 500;
output = "";
if(x>y && x>z){
    output = "x is the greater valu";
}
else if(y>z){
    output = "y is the greatest value";
}
else{
    output = "z is the greatest value";
}
console.log(output);
document.getElementById('h32').innerHTML = output;

var a = 10;
output = "the data type is :" + typeof a;
console.log(output);
document.getElementById('h33').innerHTML = output;

var name = 'PNSN';
output = "the data type is :" + typeof name;
console.log(output);
document.getElementById('h34').innerHTML = output;

var a = true;
output = "the data type is :" + typeof a;
console.log(output);
document.getElementById('h35').innerHTML = output;

var age = 23;
output = "";
if (age >=18){
    output = "eligible for vote :" + age;
}
else{
    output = "not eligible to vote :" + age;
}
console.log(output);
document.getElementById('h36').innerHTML = output;

var a = 20;
var b = 30;
var add = 0;
add = add + (a+b);
add  += 1;
add ++ ;
output = "the add no is :" + add ;
console.log(output);
document.getElementById('h37').innerHTML = output;

var age = 20;
output = "";
(age >=18)? output = "continue vote process" :  output = "not eligible";
console.log(output);
document.getElementById('h38').innerHTML = output;

var inRelation = true;
var parentsOk = true;
output = "";
if (inRelation && parentsOk){
    output = "task completed";
}
else{
    output = "complete the task";
}
console.log(output);
document.getElementById('h39').innerHTML = output;


var name =  ' naga surya narayana';
output = name;
console.log(output);
document.getElementById('h310').innerHTML = output;

var name = 'narayana';

output = typeof name;
console.log(output);
document.getElementById('h311').innerHTML = output;







