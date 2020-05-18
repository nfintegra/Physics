document.getElementsByClassName("circle");
document.addEventListener('animationiteration')
let y = 51;

function myAnimation(){
    gsap.to(".circle", {duration: 1, scale: 1, repeat: 1, yoyo:true});
}     


function replayAnimation() {
    if (x <= 51 && y <= 51 ) {
        myAnimation();
    }

}

replayAnimation();
