$(document).ready(function() {
    $("form#PING-PONG").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = PINGPONG(number);
      $("#result").text(result);
      $("button#PING PONG").click(function)(){
      }
    });
  });

  var PINGPONG=function(number)
    for (number = 1; number <=3; number+=3) {
  console.log('ping');
}
      if (number % 3) {
        return true;
      } else {
        return false;
      }
    };
