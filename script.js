$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Desenvolvimento", "Marketing Digital", "Design", "Gestão de Tráfego", "Websites"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedores", "Marketing Digital", "Designers", "Freelancers", "Gestores de Tráfego", "Digitais Influencers"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.navbar .menu li').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});