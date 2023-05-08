/*Esconder card de pokemon aberto e mostrar card selecionado*/

/* 1° - remover classe ativa que marca o pokemon na lista*/

/* 2° - adicionar a classe ativa no item da lista selecionado*/

// Variáveis
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.card-pokemon')

//"forEach" é a função e "pokemon =>" o parâmetro

listaSelecaoPokemon.forEach(pokemon => {
    //Evento "click" criado, separado por vírgula para o bloco que será executado ao clicar 
    pokemon.addEventListener('click', () => {
        //remover classe aberto do cartão aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //Pegando o atributo "id" de dentro de "pokemon"
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCardPokemonParaAbrir = 'card-' + idPokemonSelecionado
        const cardPokemonParaAbrir =  document.getElementById(idDoCardPokemonParaAbrir)
        //add classe aberto para as classes do pokemon selecionado
        cardPokemonParaAbrir.classList.add('aberto')

        //remover classe ativo da lista de pokemons
        const pokemonAtivoDaLista = document.querySelector('.ativo')
        pokemonAtivoDaLista.classList.remove('ativo')
        const pokemonParaAtivar = document.getElementById(idPokemonSelecionado)
        //add classe ativo para as classes do pokemon selecionado
        pokemonParaAtivar.classList.add('ativo')

    })
})


