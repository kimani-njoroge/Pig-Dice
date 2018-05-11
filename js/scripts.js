$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var name =($("#plyr1-name").val());
    var name2 =($("#plyr2-name").val());

    $(".play1").append(name);
    $(".play2").append(name2);
  });
});
