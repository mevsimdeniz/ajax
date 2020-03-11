$(document).ready(function () {
    $('.education').on('click','button',function () {
       // alertify.success('trial');

        var title = $(this).closest(".education").find("h2").text();
        alertify.success(title + " Added");

       var li = $(this).closest('.education');
       var numara =li.data('numara');
       var paragraph = $('<p>' + numara + '</p>');
       li.append(paragraph);
       $(this).remove();
    });
    
    $('.filter').on('click','.new',function () {
        $('.education').removeClass('selected');
        $('.education').filter('.new').addClass('selected');
        
    });

    $('.filter').on('click','.old',function () {
        $('.education').removeClass('selected');
        $('.education').filter('.old').addClass('selected');
        
    });

    $('.education').on('click', 'a',function (event) {
        event.preventDefault();
        let comments = $(this).closest('.education').find('.comments');
        comments.slideDown();

        
    });
});