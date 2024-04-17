const video = document.querySelector('.video-background')

const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mousewheel: { },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})

swiperText.on('slideChange', function() {
    gsap.to(video, 1.6, {
        currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
        ease: Power2.easeOut
    })
})

let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let hh,mm,ss,hRotation,mRotation,sRotation;

function displayTime() {
    let date = new Date();

    hh = date.getHours();
    mm = date.getMinutes();
    ss = date.getSeconds();

    hRotation = 30*hh + mm/2;
    mRotation = 6*mm;
    sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);