document.addEventListener('DOMContentLoaded', ()=>{
    anime.timeline([

    ])
    .add({
        target: '.cover',
        height: ['60%', '200%'],
        top: ['90%', '100%'],
        easing: ['easeOutCubic'],
        duration: '1200',
    })

    .add({
        target: '.welcome_text h2', 
        top: ['-150%', '50%'],
        easing: ['easeOutQuad'],
        offset: '-=600',
        duration: '700'
    })

    .add({
        target: '.welcome_text h2', 
        top: ['50%', '100%'],
        easing: ['easeOutQuad'],
        offset: '+=1000',
        duration: '700',
        })

    .add({
        target: '.cover', 
        top: ['50%', '100%'],
        easing: ['easeOutQuad'],
        offset: '+=1200',
        duration: '400',
    })
    



})