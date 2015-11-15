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

$(document).ready(function () {
    $("#3").mouseover(function () {
        $(".grayscaleDS").removeClass().fadeTo(400,0.8).addClass("grayscaleDSbw").fadeTo(400, 1);
    });
    $("#3").mouseout(function () {
        $(".grayscaleDSbw").removeClass().fadeTo(400, 0.8).addClass("grayscaleDS").fadeTo(400, 1);
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