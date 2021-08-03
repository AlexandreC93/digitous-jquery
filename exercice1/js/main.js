// $('#square').click(function(){
//     $('#square').css('background-color', 'red')
// })


let square = document.querySelector('#square')

square.addEventListener('click',(function(){
    square.style.backgroundColor = "red";
}))