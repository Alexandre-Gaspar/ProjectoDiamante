let selecao = document.querySelector('#tipoServ')
let curso = document.querySelector ('#curso')
selecao.addEventListener('click', function() {
	if (selecao.value == 3) {
		curso.style.display = 'block'
	} else {
		curso.style.display = 'none'
	}
})

/*let li = document.querySelector('.dropdown-item')
let check = document.querySelector('#check')
check.addEventListener('click', function(){
	check.style.background = '#503721'
	li.style.background = 'transparent'
})
*/

let checkbox = document.querySelector('.form-check-input')

checkbox.addEventListener('click', function(){
	if (atrFormador.style.display === 'none') {
		atrFormador.style.display = 'block'
	} else {
		atrFormador.style.display = 'none'
	}
})

let atrFormador = document.querySelector('#atrFormador')