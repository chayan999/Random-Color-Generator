const containerEl = document.querySelector('.container');



for (let i = 0; i < 30; i++) {
    const colorContanier = document.createElement('div');
    colorContanier.classList.add("color-contanier");
    containerEl.appendChild(colorContanier)
}

function randomColor() {
    const chars = "123456789abcdef"
    const charsLanth = 6;
    let colorCode = "";

    for (let i = 0; i < charsLanth; i++) {
        const rendomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(rendomNum, rendomNum + 1);
    }
    return colorCode;
}
const containerAll = document.querySelectorAll(".color-contanier");


function colorGenerate() {
    containerAll.forEach((all) => {
        const newcolor = randomColor()
        all.style.backgroundColor = "#" + newcolor;
        all.innerText = "#" + newcolor;
    })
}

colorGenerate();
