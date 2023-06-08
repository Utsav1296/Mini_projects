const Possible_Limit_for_colors = 255;
// const colors = ['green', 'blue', 'brown', 'grey', 'orange', 'pink']
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// btn.addEventListener('click', function () {
//     const randomNumber = 3;
//     let x = random()
//     document.body.style.backgroundColor = colors[x]
//     color.textContent = colors[x]
// })

// function random() {
//     // Math.floor(Math.random()*colors.length)
//     return Math.floor(Math.random() * colors.length)
// }
function random1() {
    return Math.floor(Math.random() * Possible_Limit_for_colors)
}
function random2() {
    return Math.floor(Math.random() * Possible_Limit_for_colors)
}
function random3() {
    return Math.floor(Math.random() * Possible_Limit_for_colors)
}
function random4() {
    return Math.random().toFixed(1)
}

// rgba(0, 9, 9, .2)
btn.addEventListener('click', function () {
    let r = random1()
    let g = random2()
    let b = random3()
    let a = random4()
    document.body.style.backgroundColor = `rgba(${r},${g},${b},${a})`
    color.textContent = `rgba(${r},${g},${b},${a})`
    // console.log(`rgba(${r},${g},${b},${a})`)
})