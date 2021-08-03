// $(".btn").click(function(){
//     $("#text").animate({
//         fontSize: "50px"
//     })

//     });


    let btn = document.querySelector('.btn')
    let text = document.querySelector('#text')

    btn.addEventListener('click', function(){
        text.animate([
            {transform: 'fontSize= 20px'},
            {transform: 'fontSize= 800px'}
        ],
        
        {
            duration: 1000,
            iterations: 3
        })
    })