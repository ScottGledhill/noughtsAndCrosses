$( function() {
  // $('td').click( function() {
  //   $(this).toggleClass("cross");
  // } );

  var player = 1;

  $('td').click( function() {
    if (player === 1) {
      $(this).toggleClass("cross");
      player = 2;
    } else {
      $(this).toggleClass("circle");
      player = 1;
    }
  });
} );
