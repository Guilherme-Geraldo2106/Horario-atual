function carregar(){
    var men = document.querySelector('div#msg')
    var fot = document.querySelector('img#imagem')
    var minute = new Date()
    var min = minute.getMinutes()
    var data = new Date()
   var hora = data.getHours()
   if(min<10){
    men.innerHTML=`A hora atual é: ${hora}:0${min}`  
   }else{
    men.innerHTML=`A hora atual é: ${hora}:${min}`
   }
   if(hora>=0&&hora<12){
      fot.src = 'imagens/manha.png'
      document.body.style.backgroundColor='#9dabae' 
    }else if(hora>=12&&hora<18){
        fot.src = 'imagens/Tarde.png'
        document.body.style.backgroundColor='#f4b75e'
    }    else{
            fot.src = 'imagens/noite.png'
            document.body.style.backgroundColor='#123f45'
         }
}