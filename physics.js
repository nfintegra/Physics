// const squares = document#querySelectorAll('#squares');

// // const object = {
// //     percentage: 0%,
// //     number:0
// // }

// anime({
//     targets: squares,
// //    percentage: '150%',
// //  ['#squares', '#squares'] | '#squares, #squares'

//     translateX: 500
  
// });

anime({ 
        targets: '.square',
        translateX: 270,
        easing: 'easInOutSine',
    });

anime({
    targets: '#loop',
    // translateX: 270,
    loop: 3,
    // easing: 'easeInOutSine'
  });
  
  anime({
    targets: '#loop-infinity',
    // translateX: 270,
    loop: true,
    // easing: 'easeInOutSine'
  });
  
  anime({
    targets: '#loop-reverse',
    // translateX: 270,
    loop: 3,
    direction: 'reverse',
    // easing: 'easeInOutSine'
  });
  
  anime({
    targets: '#loop-reverse-infinity',
    // translateX: 270,
    direction: 'reverse',
    loop: true,
    // easing: 'easeInOutSine'
  });
  
  anime({
    targets: '#loop-alternate',
    // translateX: 270,
    loop: 3,
    direction: 'alternate',
    // easing: 'easeInOutSine'
  });
  
  anime({
    targets: '#loop-alternate-infinity',
    // translateX: 270,
    direction: 'alternate',
    loop: true,
    // easing: 'easeInOutSine'
  });