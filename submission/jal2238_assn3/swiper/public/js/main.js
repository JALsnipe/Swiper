// $(function(){
// 	$('#currentTime').html($('#video').find('video1').get(0).load());
// 	$('#currentTime').html($('#video').find('video1').get(0).play());
// });

// setInterval(function(){
// 	$('#currentTime').html($('#video').find('video1').get(0).currentTime);
// 	$('#totalTime').html($('#video').find('video1').get(0).duration);
// },500);

$(document).ready(function(){

$("#video1").on(
    "timeupdate",
    function(event){
      onTrackedVideoFrame(this.currentTime, this.duration);
    });

  function onTrackedVideoFrame(currentTime, duration){
    $("#currentTime").text(gTimeFormat(currentTime) + ' min');
    $("#totalTime").text(gTimeFormat(duration) + ' min');
  }

  var gTimeFormat=function(seconds){
    var m=Math.floor(seconds/60)<10?"0"+Math.floor(seconds/60):Math.floor(seconds/60);
    var s=Math.floor(seconds-(m*60))<10?"0"+Math.floor(seconds-(m*60)):Math.floor(seconds-(m*60));
    return m+":"+s;
  };
});