/* loading function */
window.onload = function () {
    'use strict';
    setTimeout(fade_out, 4000);
    function fade_out() {
        $(".loader").fadeOut().empty();
    }
};
/* notify click */ 
var notifyBtn = document.getElementById('notify'),
    StarNotify = document.getElementById('get-notify'),
    firstSwitch = document.getElementById('someSwitchOptionDefault'),
    firstSwitchRes = document.getElementById('first'),
    secondSwitchRes = document.getElementById('second'),
    secondSwitch = document.getElementById('someSwitchOptionSuccess');
    
    


notifyBtn.onclick = function () {
    'use strict'; 
    
    $(".get-notify").css({'display': 'block'});
    StarNotify.style.transition = "all 6s";
    StarNotify.style.WebkitTransition = "all 6s";
};
firstSwitch.onclick = function () {
    'use strict';
    var 
        clicks = $(this).data('clicks');
    if (clicks) {
        firstSwitchRes.innerHTML = "";
    } else {
        calTime();
        firstSwitchRes.innerHTML = "سيقوم التطبيق بتذكيرك بالصلاة على النبي كل نصف ساعة .";
        
    }
    $(this).data("clicks", !clicks);
};
function calTime() {
    'use strict';
    var time = new Date(),
        s = time.getSeconds(),
        m = time.getMinutes(),
        t = setTimeout(calTime, 500),
        m = checkTime(m);
    if (m === 30 && s === 0 || m === 60 && s === 0) {
        var audio = new Audio("salyalamo7amad.mp3");
        audio.play();
    }
      
}
function calDay () {
    var data = new Date(),
        h = data.getHours(),
        s = data.getSeconds(),
        h = checkTime(h);
    if (h === "09" && s === 0) {
        var audio = new Audio("salyalamo7amad.mp3");
        audio.play();
    }
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
secondSwitch.onclick = function () {
    'use strict';
    var clicks = $(this).data('clicks');
    if (clicks) {
        secondSwitchRes.innerHTML = "";
    } else {
        calDay();
        secondSwitchRes.innerHTML = "سيقوم التطبيق بتذكيرك بالاستغفار كل يوم عند الساعه التاسعة مساء / صباحا .";
    }
    $(this).data("clicks", !clicks);
};