// $('.btn').click(function (){
//     $('#text').css('display', 'block')
// })

let text = document.querySelector('#text')
let btn = document.querySelector('.btn')

function display (){
    text.style.display = "initial"
}


btn.addEventListener('click', display)
