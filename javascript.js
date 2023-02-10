const parent = document.querySelector(".grid");

let squares = +prompt("Enter number of squares"); // number of squares we need 10x10 grid 
console.log(squares);
let gridWidth = 750-squares;// to accommodate gap of 1px;
let width = gridWidth/squares; //width of each square inside grid;
console.log(width);

for(let i=0;i<(gridWidth*gridWidth)/(width*width);i++)
{
    let element = document.createElement("div");
    // element.textContent = "HI";
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
let but = document.querySelector(".button");
but.addEventListener('click',changeSize);
