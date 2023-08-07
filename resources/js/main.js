$(window).on("load", function () {
  $(".loading").fadeOut(2000);

  $(".container").fadein(1000);
});

// First, you'll need to include the CryptoJS library


// Define a secret key to use for encryption and decryption
const key = document.querySelector(".Key");

const mydata =
  "U2FsdGVkX18XOwGWONLu7gTrVkwvCgOAkX0jyBHAyQyQ3Kj0XSqM5wemvxusvw9JNZMIooTkeOu3l//wmx8BzUgZ0J4BY9D1OncFkuVeLuzSy6E80Vb3tl8Ht9DIekbiX29XUITBbPrF3GqyQ6OoMJSIFuoW5iEXVWJAiQLxfx0zgmf5HrWi0vnwjL2vcHi2UmGh5JLvuUgY391jeRGO1FHgpIZSs4Xw0z7WWEP5/2AKKcnrHbqxFCQ7kkLlwKhqF6kkCnpFFuvjXxPsEsAMPbN+UrTuaty+fXEZ7JYPyO/JtRuPY67xaKwFM/HZxK0gM7zqVqFuAvBVTY8EWhkqnYREsnPrW9aP0lxIOFzKYlj8Zkex1XZ55p5AsdwnfXlug7wSv3YesbSZDAQE2thocr9Lsgvf77QRz0pscKHTuLraTpi7sgVuIchx1U2emHjQagAyaCYrFQo78BUgg9L/I3sJiRAFtUGlihIRHmVroEE4JIv3O08z7NxoitDsGQWbopo70r+MTc9tqftZhawwCAdGq5LhYApd6opEbklM/rAx8x6VkffLTSnoQSzJaKlzl/qAuj04FogOH3GNei9hbNaBek4FDndLXTCZcX36JEpyMR8NPNYLJH+W8O2wu/5hISNVd6UdwmV0O8dh0ie9zg4DHz1RYsp5KibBwaf77GMwxP/r/37aUPkf4Z3k4s+Ei6H9ivvXYERVyMTRhmGZM5LSn8QUjxYd/KreDWSs1D1V+qmScdBTX88ppF21DL7BlfsBrqnIsPO7F/01MR410QXhVzOiytfw/SBjKFdVB1VW1GaF+J4PxhAqxh3dGPfDF5ISJhFXBoZeAGfryTHibp1Y1lA5EcaRQq3z61baOXrmA3xPAqTgCFrg/Ak5H6EyAa+9+awFAdJpZZdAhgFZvp+d/3dagGoG12LnJLfmbaaKWltlmf3W10peedTn9BDhCiB0CerPVSL3jlPixDwKqP8glMj7OYWtraSCS9FDaxQDorySA+u9gb+P+mc8D+e7+51t1TfxJw+CgGCUz2jXPVPzS4TmaqBZIz1/6ZMbkgtl3aZ9BQSie6CqcWg8b1nkJValvUfBk729fVL5wCRcuzA8fwHGANXJ+bYNyWWaCGGn4CZYMF3b+BTjYXSgMTBcWE1vzVpVeTi+PYIO5ybwRdIZmJu4RCA+EgHGkzLwn/hT/c6Sj66s2uDSdSncwyM6avPJIqtp4xW/L49PweVL9BxENeJi46lDBsgVtEAolMUk9EPdJKiI/M449U3QJbvdOLMAB9nNCe7h1V6Qvv/9jw==";

let charArr = "asdasdasdasdasd";
let color = "#00cc00";

const text = document.querySelector(".textZ");
const link = document.querySelector(".link");


key.addEventListener("input", (e) => {
  try {
    const decryptedData = CryptoJS.AES.decrypt(mydata, e.target.value);
    const decryptedDataString = decryptedData.toString(CryptoJS.enc.Utf8);

    // Parse the decrypted data back into a JSON object
    const parsedData = JSON.parse(decryptedDataString);

    charArr = "👍👍👍👍👍👍";
    let num = 5;
    color = "#00cc00";
    let countDown = setInterval(() => {
      text.textContent = num;
      document.title = num--;
    }, 1000);
    localStorage.setItem("data", JSON.stringify(parsedData));
    setTimeout(() => {
      text.textContent = 0;
      document.title = "UNLOCKED";
      clearInterval(countDown);
      link.click()

      console.table(JSON.parse(localStorage.getItem("data")));
      
    }, 5000);
  } catch {
    if (e.target.value == "") {
      charArr = "abcdedfhijk";
      color = "#00cc00";
    } else {
      color = "#D22C1D";
      charArr = e.target.value;
    }
    text.textContent = "ZERO";
    localStorage.setItem("data", "");
    console.log("wrong key");
  }
});
// Encrypt the data using the secret key

// const dataString = JSON.stringify(datas);
// const encryptedData = CryptoJS.AES.encrypt(dataString, secretkey).toString();
// console.log(encryptedData)

// Decrypt the data using the secret key

const show = document.querySelector(".material-symbols-outlined");

let ishow = false;
show.addEventListener("click", () => {
  ishow = !ishow;
  ishow ? (key.type = "text") : (key.type = "password");
});

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  canvas2 = document.getElementById("canvas2"),
  ctx2 = canvas2.getContext("2d"),
  // full screen dimensions
  cw = window.innerWidth,
  ch = window.innerHeight,
  maxCharCount = 100,
  fallingCharArr = [],
  fontSize = 20,
  maxColums = cw / fontSize;
canvas.width = canvas2.width = cw;
canvas.height = canvas2.height = ch;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.draw = function (ctx) {
  this.value = charArr[randomInt(0, charArr.length - 1)];
  this.speed = randomFloat(1, 5);

  ctx2.fillStyle = "rgba(255,255,255,0.8)";
  ctx2.font = fontSize + "px san-serif";
  ctx2.fillText(this.value, this.x, this.y);

  ctx.fillStyle = color;
  ctx.font = fontSize + "px san-serif";
  ctx.fillText(this.value, this.x, this.y);

  this.y += this.speed;
  if (this.y > ch) {
    this.y = randomFloat(-100, 0);
    this.speed = randomFloat(2, 5);
  }
};

for (var i = 0; i < maxColums; i++) {
  fallingCharArr.push(new Point(i * fontSize, randomFloat(-500, 0)));
}

var update = function () {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, cw, ch);

  ctx2.clearRect(0, 0, cw, ch);

  var i = fallingCharArr.length;

  while (i--) {
    fallingCharArr[i].draw(ctx);
    var v = fallingCharArr[i];
  }

  requestAnimationFrame(update);
};

update();
