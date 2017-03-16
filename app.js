$( function() {

  var player = 1;

  $('td').click( function() {
    td = $(this);

    if (player === 1) {
      $(this).attr('id', 'cross');
      player = 2;
      isWinner();
    } else {
      $(this).attr('id', 'circle');
      player = 1;
      isWinner();
    }
  });

  function isWinner() {
    if ((td[0]).id == 'cross') {
      console.log('cross');
} else {
  console.log('circle');
}
  }
});


// write logic for winning
//
// if table1 == toggleclass("cross") && table2 == toggleclass("cross") etc
//
// write reset button that .removeClass them all
