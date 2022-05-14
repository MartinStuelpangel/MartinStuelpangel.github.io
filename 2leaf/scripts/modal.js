

$(".open").ready(function() {
  $(".popup-box, .popup-inner").addClass("visible");
  $(".popup-box").animate({  width: '80%', height: '550px'});
});


$(".close-box").on("click", function() {
  $(".popup-box, .popup-inner").removeClass("visible");
});