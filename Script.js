function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML = 'Agora são ${hora} horas'
    if(hora >=0 && hora < 12){
        // Bom Dia
        img.src= 'fotomanha.png'
    }else if (hora >= 12 && < 18){
        //Boa tarde
        img.src= 'fototarde.png'
    }else{
        //boa noite
        img.src= 'fotonoite.png'
    }
}
