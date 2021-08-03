  
//   $(".btn").click(function(){
//     $("#square").animate({
//         width: "500px"
//     })

//     });


let btn = document.querySelector('.btn')
let square = document.querySelector('#square')

btn.addEventListener('click', function(){
    square.animate([

        { transform: 'translateY(0px)'},
        { transform: 'translateX(300px)'}
     ],
     
         {
             duration: 1000,
             iterations: 1
         }
     )
})


  