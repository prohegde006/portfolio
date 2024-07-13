let year = new Date().getFullYear();
document.getElementById('time').innerHTML = year;

function navMenu() {
    var x = document.getElementsByTagName("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }