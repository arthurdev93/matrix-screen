//geting the Canvas element
const c = document.getElementById("matrix");

//define the context
const ctx = c.getContext("2d");

//setting Canvas with window max-size
c.height = window.innerHeight;
c.width = window.innerWidth;

//matrix symbols see more >> https://bit.ly/3yFJoU3
const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];

const fontSize = 18;

//defining how many columns will be needed by screen size and font
const columns = c.width / fontSize;

//creating an array for each drop, always starting at the position of y=1
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {
    // filling the entire screen with black with opacity
    // this opacity trick will be useful for the purpose
    // of the letters gradually disappearing
    // as we will have many frames upon frames
    // the black that at first is almost transparent will be very opaque
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    //set font style and color
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i++) {
        // picking a random letter from array
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        //writing on screen
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        //reset drops-position
        if (drops[i] * fontSize > c.height && Math.random() > 0.95) {
            drops[i] = 0;
        }

        //moving drops on y-axis
        drops[i]++;
    }

    //request animation frame by frame
    window.requestAnimationFrame(draw);
}

// Calling function
draw()





