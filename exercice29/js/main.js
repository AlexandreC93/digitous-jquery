var btn = document.querySelector('input')

let reg = /\w{5,}/gi

if (reg.test(btn) === true){

$('.btn').click(function(){
    $('input').addClass('is-valid')
})
} else {
    $('.btn').click(function(){
        $('input').addClass('is-invalid')
    })
}