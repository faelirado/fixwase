let indiceAtual = 0;
    const imagens = document.getElementById('carrossel-imagens');
    const totalImagens = imagens.children.length;

    function mostrarImagem() {
      const larguraImagem = imagens.children[0].clientWidth;
      imagens.style.transform = `translateX(${-indiceAtual * larguraImagem}px)`;
    }

    function proximaImagem() {
      indiceAtual = (indiceAtual + 1) % totalImagens;
      mostrarImagem();
    }

    function anteriorImagem() {
      indiceAtual = (indiceAtual - 1 + totalImagens) % totalImagens;
      mostrarImagem();
    }