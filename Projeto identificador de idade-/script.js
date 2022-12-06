function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calulada: ${idade}`
        var gênero = ''
        var img= document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
                        if(idade <= 0){
                        //bebê
                    img.setAttribute('src', 'baby_masc.png')
                    }else if (idade <= 12){
                        //criança
                        img.setAttribute('src', 'menino.png')
                    }else if(idade <= 16){
                        //adolescente
                        img.setAttribute('src', 'adolescente_masc.png')
                    }else if(idade <= 25){
                        //jovem
                        img.setAttribute('src', 'jovem_masc.png')
                    }else if(idade<=60){
                        //adulto   
                        img.setAttribute('src', 'adulto_masc.png') 
                    }else if (idade > 60){
                            //idoso
                            img.setAttribute('src', 'idoso_masc.png')
                    } 
                
        }else if (fsex[1].checked){
            gênero = 'Mulher'
                    if(idade <= 0){
                        //bebê
                        img.setAttribute('src', 'baby_femi.png')
                    }else if (idade > 0 && idade <= 12){
                        //criança
                        img.setAttribute('src', 'menina.png')
                    }else if(idade > 12 && idade <= 16){
                        //adolescente
                        img.setAttribute('src', 'adolescente_femi.png')
                    }else if(idade > 16 && idade <= 25){
                        //jovem
                        img.setAttribute('src', 'jovem_femi.png')
                    }else if( idade<=60){
                        //adulto    
                        img.setAttribute('src', 'adulto_femi.png')
                    }else if(idade > 60){
                            //idoso
                            img.setAttribute('src', 'idosa_femi.png')
                    } 
        }
        res.style.textAlign= 'center'
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}