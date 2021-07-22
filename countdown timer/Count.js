let start = document.getElementById("Start");
let reset = document.getElementById("Reset");
let pause = document.getElementById("Pause")
let d = document.getElementById("day");
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second")
let hs = document.getElementById("hundredthsecond");
let startTime = null;
let stop = 1;
function timer(){
    if( d.value==0 && h.value==0 && m.value==0 && s.value==0 && hs.value==0){
    d.value= 0;
    h.value= 0;
    m.value= 0;
    s.value= 0;
    hs.value= 0;
    console.log(stop)
    } else if (hs.value!=0){
        hs.value--;
    } else if (s.value!=0 && hs.value==0){
        hs.value=99;
        s.value--;
    } else if (m.value!=0 && s.value==0 && hs.value==0){
        hs.value=99;
        s.value=59;
        m.value--;
    } else if (h.value!=0 && m.value==0 && s.value==0 && hs.value==0){
        hs.value=99;
        s.value=59;
        m.value=59;
        h.value--;
    } else if (d.value!=0 && h.value==0 && m.value==0 && s.value==0 && hs.value==0){
        hs.value=99;
        s.value=59;
        m.value=59;
        h.value=23;
        d.value--;
    }
}
function stopTimer(){ 
    if (stop == 0){
    console.log("test4");
    stop = 1;
    console.log(stop);
    clearInterval(startTime);
    }
}
function startTimer(){
    if(stop == 1){
    stop = 0;
    console.log(stop);
    startTime = setInterval(function(){
        timer();}, 10)
    }
};
start.addEventListener("click", function(){
        console.log("test1")
        startTimer()
});
pause.addEventListener("click", function (){
        console.log("test2");
        stopTimer();
});
reset.addEventListener("click", function(){
        console.log("test3")
        stopTimer();
        d.value=0;
        h.value=0;
        m.value=0;
        s.value=0;
        hs.value=0;
});
