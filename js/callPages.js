//  **Chama outra página

function abrir(pag){
    let localOpen = document.querySelector('#principal')
    let pagina = new XMLHttpRequest()

    pagina.onreadystatechange = () =>{
        if(pagina.readyState == 4 && pagina.status == 200){
            localOpen.innerHTML = pagina.response
        }
    }

    pagina.open('GET', `${pag}.html`)
    pagina.send()
}

 // fim da instrução