// $('.btn').click(function(){
//     $('#text').hide()
// })

let btn = document.querySelector('.btn')
let text = document.querySelector('#text')

btn.addEventListener('click', function(){
    text.style.display = "none"
})