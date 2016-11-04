function makeItRain(n) {
    
    var fallTime, rotateTime, delayTime, $fetti;
    var colors = ['red', 'yellow', 'purple', 'cyan', 'pink', 'crimson', 'hotpink', 'fuchsia'];

    if (!n) {n = 20}
    var $appendTo = $('body');
        $appendTo.css({'overflow': 'hidden'});
    
    for (var i=0; i<n; i++) {
        
        $fetti = $('<div class="fetti"></div>');
      
        fallTime = ((Math.random() * 2) + 3);
        rotateTime = ((Math.random() * 2) + 1);
        delayTime = Math.random()*4;
        
        $fetti.css({
            'left': + Math.floor($(window).width() * Math.random()) + 'px',
            'background-color' : colors[Math.floor(Math.random()*colors.length)],
            'animation' : ' fetti_fall '   + fallTime + 's' + ' linear infinite,'+
                          ' fetti_rotate ' + rotateTime + 's' + ' linear infinite',
            'animation-delay' : delayTime + 's'
            
        })
                
        $appendTo.append($fetti)
    }
    
}

makeItRain();