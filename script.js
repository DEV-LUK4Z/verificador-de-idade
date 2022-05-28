function verificar(){
    let data = new Date()
    let ano  = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res  = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert("Verifique os dados e tente novamente!")
    }else{
        let fsex  = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')

        if (fsex[0].checked){
            genero = "um Homen"
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'image/menino.jpg')
            }else if (idade < 20){
                //jovem
                img.setAttribute('src', 'image/homem_jovem.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'image/homem_adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'image/homen_idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = "uma Mulher"
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'image/menina.jpg')
            }else if (idade < 20){
                //jovem
                img.setAttribute('src', 'image/mulher_jovem.jpg')
            }else if (idade < 50){
                //adulta
                img.setAttribute('src', 'image/mulher_adulta.jpg')
            }else{
                //idosa
                img.setAttribute('src', 'image/mulher_idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}