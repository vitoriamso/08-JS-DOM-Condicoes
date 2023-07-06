function carregar(){
    var msg= window.document.getElementById('msg');
    var img= window.document.getElementById('img');
    var data= new Date();
    var hora= data.getHours();
    msg.innerHTML = 'Agora são ${hora} horas';
    if(hora >=0 && hora < 12){
        // Bom Dia
        img.src= "./imgHoradodia/fotomanha.png";
        document.body.style.background = "#4273c2";
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src= "./imgHoradodia/fototarde.png";
        document.body.style.background = "#c27e2b";
    }else{
        //boa noite
        img.src= img.src = "./imgHoradodia/fotonoite.png";
        document.body.style.background = "#08191f";
    }
}
