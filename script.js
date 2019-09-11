function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = "#f8ec7ecc"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'tarde.jpg'
        document.body.style.background = "#0fd63ac9"
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = "#000925e7"
    }
}