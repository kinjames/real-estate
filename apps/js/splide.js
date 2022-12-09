document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
  
    var thumbnails = new Splide( '#thumbnail-carousel', {
      fixedWidth  : 100,
      fixedHeight : 60,
      gap         : 2,
      rewind      : true,
      arrows    : false,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        600: {
          fixedWidth : 60,
          fixedHeight: 44,
        },
      },
    } );
  
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );