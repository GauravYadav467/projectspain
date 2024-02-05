const noTexts = ['Pakka Nahi?', 'Dobara soch lo...', 'Once in a life time offer h... Dekh lo', "Pleeeease!!", "Samjha kro na", "Mai nahi manunga", "Kya itna bura hu mai?"]
let height = 50;
let width = 100;
let fontSize = 15;
document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    yesButton.addEventListener("click", () => {
        window.open("./success.html", '_self');
    })

    noButton.addEventListener('click', () => {
        yesButton.style.height = `${height}px`;
        yesButton.style.width = `${width}px`;
        yesButton.style.fontSize = `${fontSize}px`
        const random = Math.floor(Math.random() * noTexts.length);
        noButton.textContent = noTexts[random];
        height = height*1.2;
        width = width*1.2;   
        fontSize = fontSize*1.2;
    })
})
