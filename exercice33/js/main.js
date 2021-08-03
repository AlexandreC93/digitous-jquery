$('.btn').click(function(){
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data,satuts, response){
           $('#country').append(data[0].name);
           $('#capital').append(data[0].capital);
        }
    })
})