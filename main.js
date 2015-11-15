$(document).ready(function() {
  $("#name").hover(function() {
    $("#name").css({
      "color": "black"
    });
  }, function() {
    $("#name").css({
      "color": "orange"
    });
  });
});

$(document).ready(function(){

    $('.window').windows({
        snapping: true,
        snapSpeed: 500,
        snapInterval: 1100,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    })

});