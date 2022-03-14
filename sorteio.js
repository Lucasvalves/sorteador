let inputSorteio = document.querySelector('.inputSorteio')
let buttonAdd = document.querySelector('.btAdd')                // //Pegando os inputs e realizando tribuições
let buttonSortear = document.querySelector('.btSortear')
let Names = document.querySelector('.listNames')
var pessoas = []

//EVENTOS 

buttonAdd.addEventListener('click', addName) // Evento de clique que adiciona os nomes dos participantes
buttonSortear.addEventListener('click', sorteio) // Evento de clique que realiza o sorteio


// FUNÇÕES

function addName(event) { //Função que cria a lista d participantes

    event.preventDefault()
    pessoas.push(inputSorteio.value)

    var sorteLi = document.createElement('li') 
    
    sorteLi.classList.add('participantes')
    sorteLi.innerText = inputSorteio.value
    inputSorteio.value = ''
    Names.appendChild(sorteLi)
    
}

function sorteio() { // Função que realiza o sorteio 

    let np = pessoas.length 
    let ns = Math.floor (Math.random()* np)

    document.getElementById('nomeSorteado').innerHTML = 'O SORTEADO FOI: '+ pessoas[ns] 

}


