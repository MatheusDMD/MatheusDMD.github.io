$(document).ready(function() {
  $("#name").hover(function() {
    $("#name").css({
      "color": "red"
      "font-size": "20"
    });
  }, function() {
    $("#name").css({
      "color": "black"
    });
  });
});