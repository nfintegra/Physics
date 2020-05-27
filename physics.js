document.addEventListener('DOMContentLoaded', 
()=>{
  anime.timeline({

  })
  .add({
    targets: '.cover',
    height: ['60%','200%'],
    top: ['-90%', '-100%'],
    easing: 'easeOutCubic',
    duration: '1200'
  })
  .add({
    targets: 'welcome_text h2',
    top: ['-150%','50%'],
    easing: 'easeOutQuad',
    offset: '-=600',
    duration: '700',
  })
  .add({
    targets: 'welcome_text h2',
    top: ['50%','-150%'],
    easing: 'easeOutQuad',
    offset: '-=1000',
    duration: '700',
  })
})