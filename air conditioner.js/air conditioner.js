let scrollcontainer = document.querySelector(".gallery");

let backbtn = document.getElementById("backbtn");

let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel" , (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltay;
});

nextbtn.addEventListener("click", ()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900;
});

backbtn.addEventListener("click", ()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900;
});



alert(
    "Welcome Tou air Conditioner Shop"
    )
// -----timer----

var countDownDate = new Date("Mar 8, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance =  countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours
document.getElementById("minutes").innerHTML = minutes
document.getElementById("seconds").innerHTML = seconds

},1000);

// ------menu toogle-------
  

var navlinks = document.getElementById('navlinks');
function showmenu() {
    navlinks.style.right = '0';
}
function hidemenu() {
    navlinks.style.right = '-200px';
}



