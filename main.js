alert ("Please click on grampachayat logo to open menu");
$("#list").hide();
$(document).ready(function(){
  $("#p2").hide();
  $("#readmore").on("click",function(){
    $("#p2").show();
    $("#readmore").hide();
  })
  $("#menu").on("click", function() {
    $("#list").show(900);
   })
   $("#menu").on("mouseout",function(){
     $("#list").hide(900);
   })
   $("#menu1").on("click", function() {
     $("#list").show(900);
   })
   $("#menu1").on("mouseout", function() {
     $("#list").hide(900);
   })
});
