function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora < 12){
        // Bom Dia
        img.src= 'fotomanha.png'
        document.body.style.background = '#49798a'
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src= 'fototarde.png'
        document.body.style.background = '#c27e2b'
    }else{
        //boa noite
        img.src= img.src = 'fotonoite.png'
        document.body.style.background = '#08191f'
    }
}

function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)       
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'crianco.png')
            }else if(idade < 21) {
                img.setAttribute('src', 'hadolescente.png')
                
            }else if(idade < 60) {
                img.setAttribute('src', 'adulto.png')
            }else {
                img.setAttribute('src', 'idoso.png')
            }            
            
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'crianca.png')
            }else if(idade < 21){
                img.setAttribute('src', 'madolescente.png')                
            }else if(idade < 60){
                img.setAttribute('src', 'adulta.png')
                
            }else{
                img.setAttribute('src', 'idosa.png')
            }       
            
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
   
}
