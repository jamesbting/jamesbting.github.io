var prevScrollpos = window.pageYOffset;

// function to hid the scroll window 
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
    document.getElementById("topnav-right").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
    document.getElementById("topnav-right").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}