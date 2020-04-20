var currentPlayer = 0;
var symbol = "";

document.getElementById("r1c1").addEventListener("click", function () {
  let state = document.getElementById("r1c1").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r1c1").innerHTML = symbol;
    console.log(document.getElementById("r1c1").innerHTML);
    // } else {
    //   return false;
  }
});

document.getElementById("r1c2").addEventListener("click", function () {
  let state = document.getElementById("r1c2").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r1c2").innerHTML = symbol;
  }
});

document.getElementById("r1c3").addEventListener("click", function () {
  let state = document.getElementById("r1c3").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r1c3").innerHTML = symbol;
  }
});


document.getElementById("r2c1").addEventListener("click", function () {
  let state = document.getElementById("r2c1").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r2c1").innerHTML = symbol;
  }
});

document.getElementById("r2c2").addEventListener("click", function () {
  let state = document.getElementById("r2c2").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r2c2").innerHTML = symbol;
  }
});

document.getElementById("r2c3").addEventListener("click", function () {
  let state = document.getElementById("r2c3").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r2c3").innerHTML = symbol;
  }
});

document.getElementById("r3c1").addEventListener("click", function () {
  let state = document.getElementById("r3c1").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r3c1").innerHTML = symbol;
  }
});

document.getElementById("r3c2").addEventListener("click", function () {
  let state = document.getElementById("r3c2").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r3c2").innerHTML = symbol;
  }
});

document.getElementById("r3c3").addEventListener("click", function () {
  let state = document.getElementById("r3c3").innerHTML;
  if (!state) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    document.getElementById("r3c3").innerHTML = symbol;
  }
});



document.getElementById("resetbtn").addEventListener("click", function () {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
});