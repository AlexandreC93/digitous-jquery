// $('.btn').click(function(){
//     $('#text').addClass('float-right')
// })

let btn = document.querySelector('.btn')
let text = document.querySelector('#text')

btn.addEventListener('click', function(){
    text.classList.add('class')
})
