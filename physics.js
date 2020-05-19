function myAnimation(){
    let replay = gsap.to(".circle", {duration: 1, scale: 1, repeat: 1, yoyo:true});
    setInterval(replay,1000);
}  
    myAnimation();