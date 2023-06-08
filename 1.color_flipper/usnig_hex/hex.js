const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', clickHandler);
function clickHandler() {
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * arr.length)
        // console.log(random)
        hex += arr[random]
    }
    console.log(hex);

    let newColor = hex;
    color.textContent = newColor;
    document.body.style.backgroundColor = newColor;

}