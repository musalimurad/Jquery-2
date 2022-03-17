AOS.init();


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(()=>{
    $(window).scroll(()=>{
        if ($(this).scrollTop()<=300) {
            $(".scroll-top").stop().fadeOut();
        } else {
            $(".scroll-top").stop().fadeIn();
            $(".scroll-top-btn").click(()=>{
                $("html, body").stop().animate({
                    scrollTop:0
                },1000)
            })
        }
    })

 
  })

  $(()=>{
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

     $(".sub").click(()=>{
       var userInput = $("input").val();

        console.log(userInput);
        
        if(!pattern.test(userInput))
        {
          alert('not a valid e-mail address');
        }
     })
  })

