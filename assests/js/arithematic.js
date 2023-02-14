var s = 5;
var t = 10;
var u = s + t;
var v = s - t

document.write(u);
document.write(v);

var x = 10;
var y = 5;
var z = 30;
// x+= y;
document.write("<br>" + x);

document.write("<br>" + (x > y));

if (y > x && y > z) {
    document.write("<br>y is greater");
}
else if (x > y && x > z) {
    document.write("<br>x is greater");
}
else {
    document.write("<br>z is greater");
}

if (x > y) {
    if (x > z) {
        document.write("<br>x is greater");
    }
    else {
        document.write("<br>z is greater");
    }
}
else {
    document.write("<br>y is gretaer");
}

document.write("<br>" + Date());

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
document.write(day);

document.write("<br>"+ new Date().getDay());
document.write("<br>"+ new Date().getMonth());
document.write("<br>"+ new Date().getYear());


// LOOP

var i=0;
var j=12;
while(i<10){
    document.write("<br>"+i);
    i++;
}

do{
    document.write("<br>"+j);
    j++;
} while(j<10);

for(k=10; k<20; k++){
    document.write("<br>"+ k);
}

// STRING

let text = "Please visit Microsoft and Microsoft";
let newtext = text.replaceAll("Microsoft", "W3schools");
document.write("<br>"+ newtext);

var text1 = "hello";
var text2 = "world";
var text3= text1.concat(" ", text2);
document.write("<br>"+ text3);
var text4 = text3.toUpperCase();
document.write("<br>"+ text4);

// ARRAY

var student = ["ram", "shyam", "hari"];
var address = ["pokhara", "kathmandu", "butwal"];
var age = [21, 20, 24];


function myFunction(){
    for( var i=0; i<3; i++){
        document.write("<br><br>"+ "The details are" + " " + student[i] + " " + address[i] + " " + age[i]);
    }
}

// creating object

var laptop = {
    name: "Dell",
    price: "2lakhs",
    color: "Pink",
    RAM: "8GB"
};

document.write("<br> The laptop name is " + laptop.name);
document.write("<br> The laptop price is " + laptop.price);
document.write("<br> The laptop color is " + laptop.color);
document.write("<br> The laptop RAM is " + laptop.RAM);

function onmouseOver(){
    document.getElementById("onmouse-over").innerHTML = "This is the onmouse over";

}

function onmouseOut(){
    document.getElementById("onmouse-over").innerHTML = "This is the onmouse out";

}

function onmouseDown(){
    document.getElementById("onmouse-over").innerHTML = "This is the onmouse down";

}

function onChange(){
   var input = document.getElementById("inputname");
    input.style.color = "red";
    input.style.fontSize = "1rem";
}

// css from JS
document.getElementById("demo").style.cssText="background-color:blue";

//function for giff
var load = document.getElementById("loading");
setInterval(function myGiff(){
    load.style.display= "none";
}, 1000); 
