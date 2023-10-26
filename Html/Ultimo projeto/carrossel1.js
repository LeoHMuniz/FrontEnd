function Carrossel1(config){
    this.container = (typeof config.container === "string") ? 
    document.querySelector(config.container) : config.container;
    
    this.itens = (typeof config.itens === 'string') ?
    this.container.querySelectorAll(config.itens) : config.itens

    this.btnPrevv = (typeof config.btnPrevv === 'string') ?
    this.container.querySelector(config.btnPrevv) : config.btnPrevv

    this.btnNextt = (typeof config.btnNextt === 'string') ?
    this.container.querySelector(config.btnNextt) : config.btnNextt

    var _this = this;
    var _currentSlide = 0

    init()

    function init(){
        var _show = _this.container.querySelectorAll('.show')
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        _this.itens[0].classList.add('show')
        _this.btnNextt.removeAttribute('style')
        _this.btnPrevv.removeAttribute('style')
    
        addListeners()
    }

    function addListeners(){
        _this.btnNextt.addEventListener('click', showNext)
        _this.btnPrevv.addEventListener('click', showPrev)
    }
    function showNext(){
        _currentSlide++;
        showSlide()
    }
    function showPrev(){
        _currentSlide--;
        showSlide()
    }
    function showSlide(){
        var qtd = _this.itens.length;
        var slide = _currentSlide % qtd;
        slide = Math.abs(slide);
        
        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }
}   