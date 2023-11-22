var slideIndex = 1;
var currentGroup = '';

$(document).ready(function() {
    // Show modal on image click
    $('.gallery img').on('click', function() {
        var imgSrc = $(this).attr('src');
        currentGroup = $(this).data('rel');
        $('#modalImage').attr('src', imgSrc);
        $('#myModal').css('display', 'flex');
        slideIndex = $('.gallery img[data-rel="'+currentGroup+'"]').index(this) + 1;
        showSlides(slideIndex);
    });
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = $('.gallery img[data-rel="'+currentGroup+'"]');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    $('#modalImage').attr('src', slides.eq(slideIndex - 1).attr('src'));
}