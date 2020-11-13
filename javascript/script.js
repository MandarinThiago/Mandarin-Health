var click = false;

function switchMenu(){
    click = !click;
    var menuDisplay;

    if(click){
        menuDisplay = 'none'
        imagem = './assets/images/hamburguer.png'
    }
    else{
        menuDisplay='flex'
        imagem = './assets/images/close.png'
    }

    document.querySelector(".menu-options-mobile").style.display = menuDisplay;
    document.querySelector(".icon-responsive-menu").src = imagem;
}