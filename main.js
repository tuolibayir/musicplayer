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