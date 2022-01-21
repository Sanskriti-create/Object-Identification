img = "";

function preload()
{
    img = loadImage('dc.jpeg');
}

function setup()
{
    canvas = createCanvas(650, 500);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 650, 500);
    fill("#9c62de");
    text("Dog", 45, 75);
    noFill();
    stroke("#9c62de");
    rect(10, 90, 360, 300)
    fill("#1f70ab")
    text("Cat",600, 200);
    noFill();
    stroke("#1f70ab");
    rect(360, 200, 300, 200);
}