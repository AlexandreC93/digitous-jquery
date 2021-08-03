// $('.btn').click(function(){
//     $('#square').css('width', '500')
// })

let btn = document.querySelector('.btn')
let square = document.querySelector('#square')

btn.addEventListener('click', function(){
    square.style.width = "500px"
})