// function min(a, b) {
//     for(let i =0; i>min; i++){

//         if (a < b) {
//             console.log(a);
//         }
//     }
//      typeof a
//     console.log(a, b);
// }
// min(1, 2)
// min([1, 2])

let menu = document.querySelector('.menu')
let asside = document.querySelector('aside')
let ul_li = document.querySelector('.ul_li2')
let bg_menu = document.querySelector('.b_menu')
let exitBtn = document.querySelector('.exit-btn')

menu.onclick = () => {
    if (asside.style.right === '0%') {
        asside.style.right = '-100%'
    }else{
        asside.style.right = '0%'
    }
}
exitBtn.onclick = () => {
    asside.style.right = '-100%'
}


// open.onclick = () => {
//     if (asside.style.right === '0%') {
//         asside.style.right = '-100%'
//     } else {
//         asside.style.right = '0%'
//     }
// }