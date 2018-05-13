var countTotal=0;
var result;
var diceNumber;
var die = {
  sides: 6,
  roll: function(){
    var diceNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal+=diceNumber;
    if (diceNumber ===1){
      countTotal = 0;
      $('.dice').prop('disabled', true);
      $('.die').prop('enable', true);

    } else if (diceNumber > 1) {
      $('.dice').prop('disabled', false);
      return diceNumber;
    }
  }
}
function rollDie() {
  var result = die.roll();
  return result;
}

$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var name =($("#plyr1-name").val());
    var name2 =($("#plyr2-name").val());


    $(".play1").append(name);
    $(".play2").append(name2);
  });
  $(".dice").click(function(event){
    event.preventDefault();

    var result = die.roll();
    $("#cur1").text(result);
    $("#tot1").text(countTotal.toString());
  });
  $(".die").click(function(event){
    event.preventDefault();

    var result = die.roll();
    $("#cur2").text(result);
    $("#tot2").text(countTotal.toString());
  });


});
