$(function(){
var play = document.getElementById("play");//获取播放按钮
var pause = document.getElementById("pause");//获取暂停按钮
var stop = document.getElementById("stop");//获取停止按钮
var myAudio = document.getElementById("myAudio");//获取audio标签
var range = document.getElementById("volume");//获取音量控制条

play.onclick = function(){
    myAudio.volume = range.value * 0.01;
    myAudio.play();         //开始播放
}
pause.onclick = function(){
    myAudio.pause();        //暂停
}
stop.onclick = function(){
    myAudio.pause();        
    myAudio.currentTime = 0;    //停止
}
range.oninput = function(){
    myAudio.volume = range.value * 0.01;    //调节音量
}
    

AudioControl('myAudio')
function AudioControl(id){
  // 音频控制进度条
  var audio = document.getElementById(id);
  $(audio).on('loadedmetadata',function(){
 audio.pause();
 // 进度条控制
  $(document).on('touchend','.progress-back',function(e){
    var x = e.originalEvent.changedTouches[0].clientX-this.offsetLeft;
    var X = x < 0 ? 0 : x ;
    var W = $(this).width();
    var place = X > W ? W : X;
    audio.currentTime = (place/W).toFixed(2)*audio.duration
    $(this).children().css({width:(place/W).toFixed(2)*100+"%"})
  });


  })
  setInterval(function () {
    var currentTime = audio.currentTime;
    setTimeShow(currentTime);
  }, 1000);
  // 设置播放时间
function setTimeShow(t) {
  t = Math.floor(t);
  var playTime = secondToMin(audio.currentTime);
  $(".time").html(playTime);
  $('.time-show').text(secondToMin(audio.duration));
  $('.progress-back').css({width:(t/audio.duration).toFixed(4)*100+"%"})
}
  // 计算时间
function secondToMin(s) {
  var MM = Math.floor(s / 60);
  var SS = s % 60;
  if (MM < 10)
    MM = "0" + MM;
  if (SS < 10)
    SS = "0" + SS;
  var min = MM + ":" + SS;
  return min.split('.')[0];
}
}


})
