
var x = 10;
var y = 15;
var z = x + y;
document.getElementById("para").innerHTML = z;
document.write(z);
console.log(z);
// window.alert(z);


document.getElementsByClassName("paragraph")[0].innerHTML = z; 

document.getElementsByTagName("h1")[0].innerHTML = "Hello World";

document.querySelector(".first").innerHTML = "Query Selector Class";
document.querySelector("#second").innerHTML = "Query Selector ID";

var a = document.querySelectorAll(".all");
document.getElementById("showall").innerHTML= a[0].innerHTML + a[1].innerHTML;

