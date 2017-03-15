$( function() {
  // $('td').click( function() {
  //   $(this).toggleClass("cross");
  // } );

  var player = 2;

  $('td').click( function() {
    if (player === 1) {
      $(this).toggleClass("cross");
    } else {
      $(this).toggleClass("circle");
    }
  });
} );
