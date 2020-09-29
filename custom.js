$(document).ready(function(){
    // $('.title').click(function(){
    //     $('.example-input').slideToggle(20000);
    // });

    // $('.example-input').keyup(function(){
    //     $('.title').fadeToggle("1000", function(){
    //         alert('text');
    //     });
    // });

    // $('.example-input').keyup(function(){
    //     console.log($('.example-input').val());
    // });

    // $('.main').html('<p>front end</p>')

    // $('.title').click(function(){
    //    $('.title').before('<b>before</b>');
    //    $('.title').append('<b>append</b>');

    //    $('.title').after('<b>after</b>');
    //    $('.title').prepend('<b>prepend</b>');

 
    $('.title').click(function(){
       console.log($(this).css("background-color")); 
    })
   
    $('.accord1 li p').click(function(){
        $(this).next(".accord-content").slideToggle();
          $(this).closest("li").siblings().find('.accord-content').slideUp();
    });
    


    // });
});
  