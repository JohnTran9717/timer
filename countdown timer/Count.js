let start = document.getElementById("Start");
let reset = document.getElementById("Reset");
let pause = document.getElementById("Pause")
let d = document.getElementById("day");
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second")
let hs = document.getElementById("hundredthsecond");
let startTime = null;
let stopOrStart = 0;
//event listeners
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
//functions
function startTimer(){
        if(stopOrStart == 0){
        stopOrStart = 1;
        console.log(stopOrStart);
        startTime = setInterval(function(){timer()}, 10);
        };
        function timer(){console.log("test4")
            if(hs.value!=0){
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
            }else if (d.value==0 && h.value==0 && m.value==0 && s.value==0 && hs.value==0){
                console.log("test5");
                stopTimer();
        }
    };
};
function stopTimer(){ 
    if (stopOrStart == 1 ){
    console.log("test6");
    stopOrStart = 0;
    console.log(stopOrStart);
    clearInterval(startTime);
    };
};
