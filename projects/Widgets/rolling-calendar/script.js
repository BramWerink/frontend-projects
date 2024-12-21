

var repeater = setInterval(function(){

var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();

hours = hours <10 ? "0" + hours : hours
minutes = minutes < 10 ? "0" + minutes : minutes

document.getElementById("time").innerHTML = hours + ":" + minutes;
}, 1000);

