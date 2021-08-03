// $('.btn').click(function(){
//     $('#text').show()
// })

let btn = document.querySelector('.btn')
let text = document.querySelector('#text')

btn.addEventListener('click', function(){
    text.classList.add('show')
})