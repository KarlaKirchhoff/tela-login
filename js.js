function carregar() {
    let h1_container =  document.getElementById('h1-container-01');

    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    //representar com 2 caracteres

/*function escolherimg(){
    let img = document.getElementById('login-img')
    
}*/

    //testar hora - criar function
    if((hora > 4) && ((hora == 5) && (min <= 30))) {
        h1_container.innerHTML = ` ${hora}:${min} - Manhã - Bom dia!`
        //foto nascer do sol
        let img = document.getElementById('login-img-c01')
        img.src = 'img/nascersol.png'
        document.body.style.background = '#f69767'    
    }
    else if((hora <= 12) && ((hora == 5) && (min > 30))) {
        h1_container.innerHTML = ` ${hora}:${min} - Manhã - Bom dia!`
        //foto dia
        let img = document.getElementById('login-img-c01')
        img.src = 'img/dia.png'
        document.body.style.background = '#feca79'
    }
    else if((hora < 14) && ((hora == 13) && (min <= 30))){
        h1_container.innerHTML = ` ${hora}:${min} - Tarde - Boa tarde!`
        //foto almoço
        let img = document.getElementById('login-img-c01')
        img.src = 'img/meiodia.png'
        document.body.style.background = '#e76c3b'

    }
    else if(hora <= 17){
        h1_container.innerHTML = ` ${hora}:${min} - Tarde - Boa tarde!`
        //foto tarde
        let img = document.getElementById('login-img-c01')
        img.src = 'tarde.png'
        document.body.style.background = '#b3b2ae'

    }
    else if(hora < 18){
        h1_container.innerHTML = ` ${hora}:${min} - Tarde - Boa Tarde!`
        //foto por do sol
        let img = document.getElementById('login-img-c01')
        img.src = 'img/pordosol.png'
        document.body.style.background = '#f42c07'

    }
    else{
        h1_container.innerHTML = ` ${hora}:${min} - Noite - Boa noite!`
        //foto noite
        let img = document.getElementById('login-img-c01')
        img.src = 'img/noite.png'
        document.body.style.background = '#153146'        

    }
}

function login_verificar(){
    let botao = document.getElementById('botao_verificar')
}
