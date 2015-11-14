$(document).ready(function() {
  $("#name").hover(function() {
    $("#name").css({
      "color": "red"
      "font-size": "larger"
    });
  }, function() {
    $("#name").css({
      "color": "black"
    });
  });
});