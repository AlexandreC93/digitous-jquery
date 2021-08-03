// $('.btn').click(function(){
//     $('#text').attr('class', 'float-right')
// })

let btn = document.querySelector('.btn')
let text = document.querySelector('#text')

btn.addEventListener('click', function(){
    text.style.float = 'right'
})