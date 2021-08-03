// $('.btn').click(function(){
//     $('#text').html('Konexio!')
// })

let btn = document.querySelector('.btn')
let text = document.querySelector('span')

btn.addEventListener('click', function(){
    text.innerHTML = "Konexio!"
})