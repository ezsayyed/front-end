(function(){
    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

    const time = new Date()

    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    const calHour = (hour, min) =>{
        const hh = hour % 12 || 12;

        const deg = (360/12) * hh;
        const degMin = (30/60)  * min;

        return deg + degMin;
    }

    const calTime = (time) =>{
        return (360/60) * time
    }
    h = calHour(h,m)
    m = calTime(m)
    s = calTime(s)
    
    hour.style.rotate = `${h}deg`;
    minute.style.rotate = `${m}deg`;
    second.style.rotate = `${s}deg`;

})();