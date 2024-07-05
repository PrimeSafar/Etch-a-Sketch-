function getRandomColor() {
    let x1 = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += x1[Math.floor(Math.random() * 16)];
    }
    return color;
}

let x = prompt("Enter Size Of Grid, Under 100");
x = Math.min(100, Math.max(1, parseInt(x))); 

const container = document.querySelector('.Nerd');
const containerWidth = x * 40; 
container.style.width = `${containerWidth}px`;



for (let i = 0; i < x * x; i++) {
    const Div = document.createElement("div");
    Div.classList.add("Block");
    container.appendChild(Div);
    Div.addEventListener('mouseover', () => {
        Div.style.backgroundColor = getRandomColor();
    });

    const set = document.querySelector('.SetValue');
    set.addEventListener('click', () => {
        location.reload();
    });

    const Eraser = document.querySelector('.Eraser');
    Eraser.addEventListener('click', () => {
        Div.style.backgroundColor = '#ffffff';
    });
   


}