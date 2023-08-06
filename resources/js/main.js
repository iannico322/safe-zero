$(window).on('load',function(){
    $(".loading").fadeOut(2000);
    
    $(".container").fadein(1000);
})


// First, you'll need to include the CryptoJS library


// Define a secret key to use for encryption and decryption
const key = document.querySelector('.Key')




const mydata = "U2FsdGVkX18Zjw05EIgQMmOe2QPyR2K3oEO4+bu9A7anL97xmTefJs56xNhKIxXUx3xkoRn5E85wY5QMwMjkTj45HWMZgMsJzogYgd127VUIgrLG19KM2QQ/dKD+V8A6gQopu7gmYAh3z+ZgUF/dXxZnXe9lPK+eylFXS8QZWjt1+E/hYH2ipAn8eg7nT4gyD/vx3cYRXOSe6iOck+IjOBMQeHFu0UszbzqkyskWXB/vS9qDSowhD8kx0CNf2kYYNa0mSCZzfJGM8blCbHhifEI2joROZOA+UjvUpm6UGyos+vpZzXhq5G5sNaaQXDsRD/9jGvFJkxZWDYp7JXSlUZwl2gsHHIzso0lxtJDR5tGp3gteMZyCuv8eUQ+u+DeXVJdjv7BgAOEeOU/pTnCqpq+EgNkVneWI3jrHM0JWOInsO/s7RY5ycPtdYnoGsk6k141KTXbfmWh4F05ufq0kCnvb9Wb1wWRRIfe+//ApBjQRwPeJPZI2nVzcb9lkAcmLuBiY1aJGgR4ByYTYX+x7Ji1W76ZwYxct/qI1ODwW7U5fVrX7YhVp5U6HZGPeds2Y4eUcwWLO0F8tr4FT5wZB+cB3eU0E1xkpkDSBakI2OkZuzWOMyyEMW4LUeAdGJp2cNV6vTTObwqevXDPrJizPIsCFmarQY7yQMB7nFx/lT8LGJDjXHKVzk3r+mh/eLiidD6c9eUHIE/LIHQbjZbdxe1rRh7i7JX/DoR8h9J9pQF+QehV8wK3+TC+MmhsyXGQbAtn+zsfl0DRco17OdbeVFom+OTVbWolWuP6dol1V0VXKT/5qW1SMGJ/Qjkr7b1pyv2i5xdXnwFcjvHvm6pOhbZbbT5p9hHgiJeiqFM8Jg3tImZvZlfHcgCe8uJDkHcPFqDRDz8GxvE4jtXf1JgI0drC5IqkIIVX/Jtm5pBI7iU4DuW6/Y08mGJmGdbRiRcRyRmIqkLDHfS99/vvQQ9prmP7/n+Wm+/owIDGF8xK/cL8Xea9b9jS1tsLjrgzeKbABtB1O6bDJv44E+PCxbEqewPATjMwBGDRZhbiFo4sDJ9TgarQKTy6XhguquswXd0HZjvKRzKDM9N9s0XRWWgENk6rTE8IqlTmoSWWoUumf8HvPIz2Fg2RmzP8iTKQdcpXOl6wyDk4J7H50pycue0u6AgHDZz95GsKmrckZokwNtRo="


let charArr = "asdasdasdasdasd";
let color = "#00cc00"

const text = document.querySelector(".textZ")

key.addEventListener('input',(e)=>{

    try{
        const decryptedData = CryptoJS.AES.decrypt(mydata, e.target.value);
        const decryptedDataString = decryptedData.toString(CryptoJS.enc.Utf8);

        // Parse the decrypted data back into a JSON object
        const parsedData = JSON.parse(decryptedDataString);
        
        charArr = "👍👍👍👍👍👍"
        let num = 1
        color = "#00cc00"
        let countDown = setInterval(()=>{
            text.textContent =  num++
        },1000)
        localStorage.setItem("data", JSON.stringify(parsedData))
        setTimeout(()=>{
            text.textContent =  0
            clearInterval(countDown)
            

            console.table( JSON.parse( localStorage.getItem("data")))
            
        },5000)

        
        
    }catch{
        if (e.target.value == ""){
            charArr = "abcdedfhijk"
            color = "#00cc00"
        }else{
            color = "#D22C1D" 
            charArr = e.target.value
        }
        text.textContent =  "ZERO"
        localStorage.setItem("data","")
        console.log("wrong key")
    }
    
    
})




// Convert the data to a JSON string
// const dataString = JSON.stringify(data);

// Encrypt the data using the secret key
// const encryptedData = CryptoJS.AES.encrypt(dataString, secretKey).toString();

// Decrypt the data using the secret key

const show = document.querySelector(".material-symbols-outlined")

let ishow = false;
show.addEventListener('click',()=>{
    ishow = !ishow
    ishow? key.type = "text": key.type = "password"
    
})

var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
    
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 20,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)]
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = color;
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();



