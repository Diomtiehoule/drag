const boxs = document.querySelectorAll('.box1')
const fBoxs = document.querySelectorAll('.box')

// let dragged;
for(let box of boxs){

box.ondragstart = (e) =>{
    dragged =box;
    e.dataTransfer.setData('text/plain', box.innerHTML);
    box.classList.add('dragged');
};
box.ondragover = (e) =>{
    e.preventDefault();
};
box.ondragenter = () =>{
    box.classList.add('dropHover');
};
box.ondragleave = () =>{
    box.classList.remove('dropHover');
};
box.ondragend = () =>{
    box.classList.remove('dragged')
    box.remove('active')
};


box.ondrop = (e) => {
    dragged.innerHTML = box.innerHTML;
    box.innerHTML = e.dataTransfer.getData('text/plain');
    
    box.classList.remove('dropHover');
}

};

for(let fBox of fBoxs){

    fBox.ondragstart = (e) =>{
        dragged =fBox;
        e.dataTransfer.setData('text/plain', fBox.innerHTML);
        fBox.classList.add('dragged');
    };
    fBox.ondragover = (e) =>{
        e.preventDefault();
    };
    fBox.ondragenter = () =>{
        fBox.classList.add('dropHover');
    };
    fBox.ondragleave = () =>{
        fBox.classList.remove('dropHover');
    };
    fBox.ondragend = () =>{
        fBox.classList.remove('dragged')

    };
    
    
    fBox.ondrop = (e) => {
        dragged.innerHTML = fBox.innerHTML;
        fBox.innerHTML = e.dataTransfer.getData('text/plain');
        
        fBox.classList.remove('dropHover');
    }
    
    };