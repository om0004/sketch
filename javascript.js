const parent = document.querySelector(".grid");

let squares = +prompt("Enter number of squares"); // number of squares we need 10x10 grid 
console.log(squares);
let gridWidth = 600;// to accommodate gap of 1px;
let width = gridWidth/squares; //width of each square inside grid;

for(let i=0;i<(gridWidth*gridWidth)/(width*width);i++)
{
    let element = document.createElement("div");
    element.classList.add("boxes");
    element.addEventListener('mouseover',changeColor);
    parent.appendChild(element);
}
changeSize();
function changeColor(e)
{
    this.style.background = 'blue';
}
function changeSize(e)
{
    console.log("sure");
    let inner = document.querySelectorAll(".grid div");
    inner.forEach((inn) =>
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
    inner.forEach((inn) =>
    {
        // console.log(inn.style.border == "400");
        // if (!inn.style.border)
        //     inn.style.border = "0px";
        // else
        //     inn.style.borderTop = "1px solid black";  
        //This will not overwrite already applied CSS properties whereas
        // inn.style.cssText = " " will overwrite
        inn.classList.toggle('newClass');
    });
}
let but = document.querySelector(".toggle");
but.addEventListener('click',removeGrid);

