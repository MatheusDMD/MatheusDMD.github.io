$(document).ready(function() {
  $("#name").hover(function() {
    $("#name").css({
      "color": "red"
    });
  }, function() {
    $("#name").css({
      "color": "black"
    });
  });
});