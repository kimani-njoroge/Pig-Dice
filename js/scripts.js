var countTotal=0;
var result;

var die = {
  sides: 6,
  roll: function(){
    var diceNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal+=diceNumber;
    return diceNumber;
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

});
