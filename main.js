const avanca = document.querySelectorAll('.btn-proximo')
console.log(avanca)

avanca.forEach(button => {
 button.addEventListener('click', function(){ 
 const atual = document.querySelector('.ativo')
const proximopasso = 'passo-'+ this.getattribute('data-proximo')

atual.classList.remove('ativo')
document.activeElementbyid(proximopasso).classList.add('ativo')

  }
})