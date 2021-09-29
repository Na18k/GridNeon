	// Obtem os elementos do HTML
	const pai = document.querySelector("#pai");
	const quadrado = document.querySelector("#quadrado");

	// Define a quantidade de quadrados que vai ter.
	const quantidadeDeQuadrado = 419;

	const links = [
		"https://github.com/Na18k",
		"https://github.com/Na18k/GridNeon",
		"https://github.com/Na18k"
		"https://google.com"
	]

	// Insere os quadrados de formas dinâmicas.
	for(i = 0; i < quantidadeDeQuadrado; i++) {
		pai.appendChild(quadrado.cloneNode(true));
	}

	for(cont = 0; cont < links.length; cont++) {
		const a = pai.children[cont];
		a.href = links[cont];
	}