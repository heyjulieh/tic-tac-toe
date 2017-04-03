console.log('Ready to play!');
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


//parameters: marker = text (x or o) to be filled in with click, turn = x = even, o = odd number, player: 1 or 2 (corresponding to x or o)
  //if box empty, select with on-click
  //start with x (player x) on turn 0 and then switch to o (player o) on next turn, with incremental turns

var turn = 0;
var marker = 'x';
var player = 'player 1';

  //mark for each player (x or o)'s turn with on click

  $('.box').on('click',function(){
  //if box is empty
  if($(this).html()==""){
    //on the uneven numbered turn (1, 3, 5, where 0 is the first turn); next turn is o
    if(turn%2 !== 0){
      marker = 'o';
      player = 'player 2';
      alert("player 1's turn!");
      console.log('o', player);
      $(this).css("color", "#4caf50");
    }
    //back to x
    else{
      marker = 'x';
      player = 'player 1'
      alert("player 2's turn!");
      console.log('x', player);
    }
    $(this).html(marker);

    //check if there is a TTT and continue/add next turn
    winTTT();
    turn++
  }
});

//function win tic tac toe
//function name: winTTT
//parameters: player, marker, add won as class (to highlight who won)
//if player x or player o has three markers in a row (i.e. x && x && x), or diagonally, or in a column, player x or o wins, alert who won, and game ends
//Winning combos:
//[1,2,3]
//[4,5,6]
//[7,8,9]
//[1,4,7]
//[2,5,8]
//[3,6,9]
//[3,5,7]
//[1,5,9]

function winTTT(){
  if ($('#b1').html()===marker && $('#b2').html()===marker && $('#b3').html()===marker){
    $('#b1, #b2, #b3').addClass('won');
    alert(player + ' won!');
  } else if ($('#b4').html()===marker && $('#b5').html()===marker && $('#b6').html()===marker){
    $('#b4, #b5, #b6').addClass('won');
    alert(player + ' won!');
  } else if ($('#b7').html()===marker && $('#b8').html()===marker && $('#b9').html()===marker){
    $('#b7, #b8, #b9').addClass('won');
    alert(player + ' won!');
  } else if ($('#b1').html()===marker && $('#b4').html()===marker && $('#b7').html()===marker){
    $('#b1, #b4, #b7').addClass('won');
    alert(player + ' won!');
  } else if ($('#b2').html()===marker && $('#b5').html()===marker && $('#b8').html()===marker){
    $('#b2, #b5, #b8').addClass('won');
    alert(player + ' won!');
  } else if ($('#b3').html()===marker && $('#b6').html()===marker && $('#b9').html()===marker){
    $('#b3, #b6, #b9').addClass('won');
    alert(player + ' won!');
  } else if ($('#b3').html()===marker && $('#b5').html()===marker && $('#b7').html()===marker){
    $('#b3, #b5, #b7').addClass('won');
    alert(player + ' won!');
  } else if ($('#b1').html()===marker && $('#b5').html()===marker && $('#b9').html()===marker){
    $('#b1, #b5, #b9').addClass('won');
    alert(player + ' won!');
  }
  //if all the squares are taken and none of the above was triggered, then final is tie
  else if (turn === 8) {
    alert("it's a tie!");
  }
}

//on click reset - remove values from boxes
$("#reset-button").on('click',function(){
    $(".box").html('');
    $(".box").removeClass('won');
    $(".box").css("color","");
    turn = 0;
});

  });
