const imageSelecionado = document.getElementById('player-one-selectionado'),
	  personagens = document.querySelectorAll('.selecione-personagem');


personagens.forEach((personagem) =>
{
	personagem.addEventListener('click', () =>
	{
		const idPersonagem = personagem.attributes.id.value;
		const nome = personagem.getAttribute("data-name");

		if (idPersonagem === 'sedusa') return;
		if (nome === 'sedusa') return;
		
		const nomeUm = document.querySelector('.nome-um');

		nomeUm.innerHTML = nome;

		
		const personagemSelecionado = document.querySelector('.selecionado');
			
			personagem.classList.add('selecionado');
			personagemSelecionado.classList.remove('selecionado');


		imageSelecionado.src = `src/${idPersonagem}.png`
	})
});