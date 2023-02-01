let clicked = 0;
let attempt = 1;
let sum = 0;
const formContainer = document.getElementById("formContainer");
const infoContainer = document.getElementById("infoContainer");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const registerForm = document.getElementById("registerForm");
const registeredInfo = document.getElementById("registeredInfo");

let name = "";
let username = "";

img1.addEventListener("click", function() {
  formContainer.style.display = "block";
});

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();
  name = document.getElementById("name").value;
  username = document.getElementById("username").value;
  formContainer.style.display = "none";
});

img2.addEventListener("click", function() {
  infoContainer.style.display = "block";
  registeredInfo.innerHTML = `Name: ${name}<br>Username: ${username}`;
});
const diceContainer = document.getElementById("diceContainer");
const couponContainer = document.getElementById("couponContainer");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const dice = document.getElementById("dice");
const diceValue = document.getElementById("diceValue");
const couponCode = document.getElementById("couponCode");

let total = 0;
let rollCount = 0;

img3.addEventListener("click", function() {
  diceContainer.style.display = "block";
});

dice.addEventListener("click", function() {
  let roll = Math.floor(Math.random() * 6) + 1;
  diceValue.innerHTML = `Rolled: ${roll}`;
  total += roll;
  rollCount++;

  if (rollCount === 3) {
    if (total > 10) {
      img4.style.display = "block";
      diceContainer.style.display = "none";
    } else {
      alert("You need to roll more than 10. Try again.");
    }
  }
});

img4.addEventListener("click", function() {
  couponContainer.style.display = "block";
  couponCode.innerHTML = `Coupon Code: ${Math.floor(
    Math.random() * 1000000000000
  )}`;
});

let currentImage = 1;
let attempts = 0;
img1.addEventListener("click", function() {
    if (currentImage === 1) {
      currentImage++;
      this.style.pointerEvents = "block";
    }
  });
  
  img2.addEventListener("click", function() {
    if (currentImage === 2) {
      currentImage++;
      this.style.pointerEvents = "block";
    }
  });
  
  img3.addEventListener("click", function() {
    if (currentImage === 3) {
      diceContainer.style.display = "block";
      this.style.pointerEvents = "none";
      currentImage++;
    }
  });
  
  dice.addEventListener("click", function() {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      sum += randomNumber;
    }
    if (sum > 10) {
      currentImage = 4;
    } else if (attempts === 0) {
      attempts++;
      alert("Please try again to score more than 10");
    }  else if (attempts === 1) {
        attempts++;
        alert("Bad luck");
      } else {
        alert("Sorry, you have no more attempts");
      }
    });

  img4.addEventListener("click", function() {
  if (currentImage === 4) {
    couponContainer.style.display = "block";
    congratulationsImage.style.display = "block";
    this.style.pointerEvents = "none";
  }
});
document.getElementById("img4").onclick = function() {
    document.getElementById("img4").style.pointerEvents = "none";
    let coupon = Math.floor(Math.random() * 1000000000000).toString();
    document.getElementById("congratulation").style.display = "block";
  };


