// $('.btn').click(function(){
//     $('#square').css('background-color', 'red')
// })

let btn = document.querySelector('.btn')
let square = document.querySelector('#square')

btn.addEventListener('click', function(){
    square.style.backgroundColor = "red"
})