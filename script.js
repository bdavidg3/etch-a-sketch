gridContainer = document.querySelector('.grid-container');
let a=9;

for (let i=1;i<=a*a;i++){
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class','grid-item');   
    gridContainer.appendChild(gridItem);
    gridItem.style.width=`calc(100% / ${a})`;
    gridItem.style.heigth=`calc(100% / ${a})`;
}