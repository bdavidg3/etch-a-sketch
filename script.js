gridContainer = document.querySelector('.grid-container');
sizeButton = document.querySelector('.grid-size');
colorInput = document.querySelector('.grid-color');
let colorSelect = colorInput.value;
let a=8;

function gridCreator(a){
    gridContainer.innerHTML="";
for (let i=1;i<=a*a;i++){
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class','grid-item');   
    gridContainer.appendChild(gridItem);
    gridItem.style.width=`calc(100% / ${a})`;
    gridItem.style.heigth=`calc(100% / ${a})`;
    gridItem.addEventListener('mouseover',()=>{
    let colorSelect = colorInput.value;
    gridItem.style.backgroundColor=colorSelect;
})
}}

gridCreator(a);

sizeButton.addEventListener('click',()=>{
    let j=1;
    a = prompt("Ingresa el tamaño de la cuadricula");
    while (j < 2){    
        if(a>=1&&a<=32){
            gridCreator(a);
            j++;
        }
        else{
            a = prompt("Por favor, ingrese un número entre 1 y 32");
        }
    }
})

