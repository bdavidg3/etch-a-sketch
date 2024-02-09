gridContainer = document.querySelector('.grid-container');
sizeButton = document.querySelector('.grid-size');
colorInput = document.querySelector('.grid-color');
rainbowButton = document.querySelector('.rainbow')
let a=8;
let rainbowMode = false;

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

rainbowButton.addEventListener('click', function() {
    if (rainbowMode) {
        rainbowMode = false;
        rainbowButton.classList.remove('active');
        rainbowButton.setAttribute('class','rainbow')
    } else {
        rainbowMode = true;
        rainbowButton.classList.add('active');
        rainbowButton.setAttribute('class','active')
    }
});

function gridCreator(a){
    gridContainer.innerHTML="";
for (let i=1;i<=a*a;i++){
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class','grid-item');   
    gridContainer.appendChild(gridItem);
    gridItem.style.width=`calc(100% / ${a})`;
    gridItem.style.heigth=`calc(100% / ${a})`;
    gridItem.addEventListener('mouseover',()=>{
        let colorSelect = '';
    if(rainbowMode == false){
        colorSelect = colorInput.value;
    }
    else{
        colorSelect = randomColor();
    }
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
