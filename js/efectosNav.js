$(document).ready(function(){
    // efecto texto
    var typed = new Typed('.text-efect', {
        strings: ["soy Gustavo.", "soy Diseñador web.", "quieres ver mi trabajo?", "empecemos Ya!"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000
    });
    // direccionamiento scroll
    var scrollTrab = $('.trabajos').offset().top,
    scrollSer = $('.servicios').offset().top,
    scrollInf = $('.sobre-mi').offset().top,
    scrollCont = $('footer').offset().top;
    $('.inicio-direct').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1300);

    });
    $('.menu-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: scrollTrab - 60
        },1300);
    });
    $('.menu-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: scrollSer - 60
        },1300);
    });
    $('.menu-sobremi').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: scrollInf - 100
        },1300);
    });
    $('.menu-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: scrollCont - 130
        },1300);
    });
    $(window).scroll(function(){
        var scroll= $(window).scrollTop(),
        ancho=$(window).width(),
        alto=$(window).height(),
        scrollInf = $('.sobre-mi').offset().top,
        scrollHeader = $('#header').offset().top,
        scrollTrab = $('.trabajos').offset().top,
        scrollSer = $('.servicios').offset().top;
        // estilos del nav
        if(ancho>799){
            if(scroll>30){
                $('#a').css({
                    'top': '0px'
                });
                $('#logo').css({
                    'width':'160px'
                });
                $('nav').css({
                    'background': '#060200',
                    'border-bottom' : 'solid 2px #FFFFFF20'
                });
                $('.list-left').css({
                    'margin-right': '50px'
                });
                $('.list-right').css({
                    'margin-left': '50px'
                });
    
            }else{
                $('#a').css({
                    'top': '230px'
                });
                $('#logo').css({
                    'width':'400px',
                });
                $('#menu').css({
                    'background': 'transparent',
                    'border-bottom': 'transparent 2px'
                });
                $('.list-left').css({
                    'margin-right': '-200px'
                });
                $('.list-right').css({
                    'margin-left': '-200px'
                });
            }

        }
        // efectos de sobre mi
        if(scroll > scrollInf - 400){
            $('.titulo-fondo').css({
                'opacity': '.05'
            });
            $('.text-inf, .titulo-inf').css({
                'transform': 'translate(0px, 0px)',
                'opacity': '1'
            });
        }else{
            $('.titulo-fondo').css({
                'opacity': '0'
            });

            $('.text-inf, .titulo-inf').css({
                'transform': 'translate(0px, 150px)',
                'opacity': '0'
            });
        }
        // efectos a servicios
        if(ancho>699){
            if(scroll > (scrollSer - 400)){
                $('.servicios li').each(function(index, elemento){
                    $(this).animate({
                        'left':'0px',
                        'opacity':'1'
                    },2000 + (index * 500));
                });
            }
        }
        // efectos a h3 de servicios
        if(scroll > (scrollSer - 450)){
            $('.servicios h3').css({
                'opacity':'1',
                'right': '0px'
            });
        }
        else{
            $('.servicios h3').css({
                'opacity':'0',
                'right': '50px'
            });
        }
        // efectos a bg
        if (scroll < alto) {
            $('#header').css({
                'background-position': 'center -' + (scroll-(scrollHeader/2))/5 +'px'
            });
        }
        // efectos a titulo de trabajos
        if(scroll > (scrollTrab - 400)){
            $('.trabajos h3, .trabajos p').css({
                'opacity':'1',
                'right': '0px'
            });
        }
        else{
            $('.trabajos h3, .trabajos p').css({
                'opacity':'0',
                'right': '400px'
            });
        }
        if (ancho>699){
            if(scroll > (scrollTrab - 300)){
                $('.trabajos .trabajo').each(function(index, elemento){
                    $(this).animate({
                        'right':'0px',
                        'opacity':'1'
                    },1000 + (index * 200));
                });
            }
        }
        else{
            $('.trabajos .trabajo').css({
                'right':'0px',
                'opacity':'1'
            }); 
        }
    });
});