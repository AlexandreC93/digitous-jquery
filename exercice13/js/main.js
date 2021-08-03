// $('.btn').click(function(){
//     $("#text").css("font-size", "50px")
// })


let btn = document.querySelector('.btn')
let text =document.querySelector('#text')

btn.addEventListener('click', function(){
    text.style.fontSize = "50px"
})