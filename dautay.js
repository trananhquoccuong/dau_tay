$(function(){

// Initialize tooltip component
 new WOW().init();
  $('[data-toggle="tooltip"]').tooltip()
 

 
// Initialize popover component

  $('[data-toggle="popover"]').popover()


  // 1. search google: counterUp js
  // 2. click vao demo
  // 3. Ctrl+U xem cold-> copy link thu vien js
  // 4.download thu vien js vien
  // 5. link vao web cua minh
  // 6. go doan code dyoi day cho div .so


      $('.so').counterUp({
                  delay: 10,
                  time: 3000
      });

      //Hieu ung cho phan phong to anh
            $("._1sanpham").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 150,

        closeEffect : 'elastic',
        closeSpeed  : 150,

        closeClick : true,

        helpers : {
          overlay : null
        }
      });

      //end 

    // $("a#carouselExampleControls").click(function(){
    //   $( "div > p" ).css( "border", "1px solid gray" );
     
    // });

})