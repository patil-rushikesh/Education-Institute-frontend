$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });

    $(window).on("scroll load", function () {
        $('.fa-bars').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

        $('section').each(function () {
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200; // Changed `top` to `offset` for clarity

            if (top >= offset && top < height + offset) {
                $('.nav-bar ul li a').removeClass('active');
                $('.nav-bar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
