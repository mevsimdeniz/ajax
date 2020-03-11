$(document).ready(function () {
    $('.egitim').on('click', 'button', function () {
        // alertify.success('deneme');

        var baslik = $(this).closest(".egitim").find("h2").text();
        alertify.success(baslik + "başarı ile sepete eklendi");


        var li = $(this).closest('.egitim');
        var fiyat = li.data('fiyat');
        var paragraf = $('<p>' + fiyat + ' TL <p/>');
        li.append(paragraf);
        $(this).remove();
    });
    $('.filtre').on('click', '.aktif', function () {
        $('.egitim').removeClass('secili');
        $('.egitim').filter('.aktif').addClass('secili');

    });
    $('.filtre').on('click', '.pasif', function () {
        $('.egitim').removeClass('secili');
        $('.egitim').filter('.pasif').addClass('secili');

    });

    $('.egitim').on('click', 'a', function (event) {
        event.preventDefault();
        let yorumlar = $(this).closest('.egitim').find('.yorumlar');
        yorumlar.slideToggle();


    });

});