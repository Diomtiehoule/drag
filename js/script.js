const boxP = document.querySelector('.box1')

boxP.ondragstart = (e) =>{
    e.dataTransfer.setData('text/plain', boxP.innerHTML);
    boxP.classList.add('dragged')
}