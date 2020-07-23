document
.querySelector('header button')
.addEventListener("click", function() {
    document
    .querySelector('.form')
    .classList.toggle('hide') // classList pra adicionar classes novas, toggle pra adicionar ou remover a classe adicionada. Isso aqui dentro de form.
})