// $('#text').click(function(){
//     $('#text').css('display', "block")
// })

let text = document.querySelector('#exercise')
let square = document.querySelector('#text')


text.addEventListener('click',function(){
    square.style.display = "initial"
})