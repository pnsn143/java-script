 function digitalClock() {
    var today = new  Date();
    var options = {timeZone : 'Asia/kolkata'};
    var localTime = today.toLocaleTimeString('en-US' , options);
    document.getElementById('display').innerHTML = localTime;
}

digitalClock();
setInterval(digitalClock,1000);


/*var today = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
 output = "date is : " + today;
console.log(output);
document.getElementById('display1').innerHTML = output; */
var today = new Date();
 var today = today.getDate() + "/" + (today.getMonth()+1) +  "/" + today.getFullYear();
 output =  "date is: " + today;
 console.log(output);
 document.getElementById('display1').innerHTML = output;


 var emplyoee = {
     name : 'surya',
     age : 22 ,
     designation : 'manager' ,
     address : {
         city : 'ongole' ,
         state : 'AP' ,
         nation : 'India'
     },
     isFromState : function (state) {
         return this.address.state === state;
     }

 };


 output = "belonging state : " + emplyoee.isFromState('AP');
 console.log(output);
 document.getElementById('onclick').innerHTML = output;

var prop = emplyoee.address.state;
prop = "the state is : " + prop;
document.getElementById('onclick').innerHTML = prop;


function img5() {
    document.getElementById('div2').setAttribute('src','img/gallery2.jpeg');
}

 function img4() {
     document.getElementById('div3').setAttribute('src','img/gallery3.jpeg');
 }

function button() {
    document.getElementById('p').style.color='violet';
}

 var trees = ["xyz","xxxx","test","ryan","apple"];
 delete trees[3];

 console.log(trees.length);


