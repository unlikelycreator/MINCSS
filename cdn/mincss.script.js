
function hamfunc() {
    var x = document.getElementsById("ham-btn");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
hambtn = document.getElementsByClassName('ham-btn').onClick = hamfunc()