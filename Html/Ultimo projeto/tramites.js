(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');


    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.burger-menu',
        widthEnabled: 1024
    })
    var carrossel = new Carrossel({
        container: '.lap-div .lap-division',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    var carrossel = new Carrossel({
        container: '.sec-quote .div-quote',
        itens: 'figure',
        btnPrev: '.div-quote .prev',
        btnNext: '.div-quote .next'
    })
})()