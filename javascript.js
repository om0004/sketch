
function formGrid(squares)
{
    // check if grid empty if not empty it first
    const parent = document.querySelector(".grid");
    if(document.querySelectorAll(".grid div").length != 0)
    {
        while (parent.firstChild)
        {
            parent.firstChild.remove();
        }
    }
    let gridWidth = 600;
    let width = gridWidth/squares; //width of each square inside grid;
   // add div elements to grid
    for(let i=0;i<(gridWidth*gridWidth)/(width*width);i++)
    {
        let element = document.createElement("div");
        element.classList.add("boxes");
        element.addEventListener("mouseover",changeColor);
        parent.appendChild(element);
    }
    //change the size of inner grids
    let span = document.querySelector(".size");
    span.textContent = `Grid Size: ${squares} X ${squares}`;
    changeSize(width);
}
function changeColor(e)
{
    if(mouseDown)
        this.style.background=`${globalColor}`;
}
function changeSize(width)
{

    let inner2 = document.querySelectorAll(".boxes");
    inner2.forEach((inn) =>
    {
        
        inn.style.width = `${width}px`;
        inn.style.height =`${width}px`;
        //This will not overwrite already applied CSS properties whereas
        // inn.style.cssText = " " will overwrite
    });
}

function removeGrid(e)
{
    let inner = document.querySelectorAll(".grid div");
    //change button color on click
    this.classList.toggle("buttonColor");   
    inner.forEach((inn) =>
    {
        inn.classList.toggle('newClass');
    });
}

function clearGrid(e)
{
    let inner = document.querySelectorAll(".grid div");   
    inner.forEach((inn) =>
    {
        inn.style.background ="white";
    });
}

function erase(e)
{
    let eraser = document.querySelectorAll(".grid div");
    this.classList.toggle("buttonColor");
    let color = globalColor;
    // basically toggle adds or removes class so we check if class present make color white else global color
    if(this.getAttribute("class") != 'eraser')
    {
        color='white';
        eraser.forEach((inn) =>
        {
            inn.addEventListener('mouseover',(e) =>
            {
                if(mouseDown) 
                    e.target.style.background = `${color}`;
            });
        });
    }
    else
    {
        eraser.forEach((inn) =>
        {
            inn.addEventListener('mouseover',(e) =>
            {
                if(mouseDown) 
                    e.target.style.background = `${globalColor}`;
            });
        });
    } 

}

function randomColor()
{
    return Math.floor(Math.random() * 256);

}
function colorRGB(e)
{
    this.classList.toggle("buttonColor");
    let rgb = document.querySelectorAll(".grid div");
    let color = globalColor;
    // if class added fill with RGB else fill with blue
    if(this.getAttribute("class") != 'rgb')
    {
        rgb.forEach((inn) =>
        {
            inn.addEventListener('mouseover',(e) =>
            {
                color =`rgb(${randomColor()},${randomColor()},${randomColor()})`;
               if(mouseDown) 
                e.target.style.background = `${color}`;
            });
        });
    }
    else
    {
        rgb.forEach((inn) =>
        {
            inn.addEventListener('mouseover',(e) =>
            {
                if(mouseDown)
               e.target.style.background = `${globalColor}`;
            });
        });
    } 
}

let mouseDown = false
document.body.addEventListener('mousedown',() => mouseDown=true);
document.body.addEventListener('mouseup',() => mouseDown=false);
// used to keep check of when mouse is down or up we want to fill grid on mouse down only

globalColor ="black";
// color to start coloring grid with
// form the grid with 5 squares
formGrid(5);

let inner = document.querySelectorAll(".grid div");

let button1 = document.querySelector(".toggle");
button1.addEventListener('click',removeGrid);
// add event listener on button to remove the grid

let button2 = document.querySelector(".clear");
button2.addEventListener("click",clearGrid); 
// add event listener to clear the grid

let values = [5,10,20,30,40,50];
let slider = document.querySelector("#slider1");
slider.addEventListener('input',e => formGrid(values[e.target.value]));
// slider will have value from 0 to 5 which will act as indexes for our values array
// changing slider will form the grid again

 let eraser = document.querySelector(".eraser");
 eraser.addEventListener("click",erase);
// erase grid values

 let rgb = document.querySelector(".rgb");
 rgb.addEventListener('click',colorRGB);
// fill grid with rgb values

// change pen color and update globalColor
 let pen = document.querySelector(".pen");
 pen.addEventListener("input",() =>
 {
    globalColor = pen.value;
 });

 
