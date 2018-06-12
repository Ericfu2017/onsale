


$(document).ready(function(){
    
    let $body = $('body');
    let backgroundImg = 'https://images.unsplash.com/photo-1507760094980-7fb3009e2f44?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1728ff9791a421ae0a257ba7a836ebe9&auto=format&fit=crop&w=716&q=80';
    $body.append('<img class="background-img" src="' + backgroundImg + '"/>');

    $('#result').click(getPrice);

    function getPrice() {
        let price = $('#original-price').val();
        let percentage = $('#sale').val();
        console.log(price);
        let result = price * (1 - percentage / 100);
        result = result.toFixed(2);
        $('#value').html('$' + result).removeClass('animated fadeInUp').width();
        $('#value').addClass("animated fadeInUp");
        $('#original-price').val('');
        $('#sale').val(''); 
    } 
   
    //.removeClass('animated fadeInUp').width()
})

