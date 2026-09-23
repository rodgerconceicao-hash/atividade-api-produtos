async function carregarDados() {
  // Subtitui pelo link que copiaste do separador PORTS
  const url = 'https://solid-fiesta-vpq9r7jjpr9jcxwwj-3000.app.github.dev/';

  try {
    const resposta = await fetch(url);
    const produto = await resposta.json();

    const listaProdutos = document.getElementById('lista-produtos');

    listaProdutos.innerHTML = `
      <div class="card-produto">
        <h2>${produto.nome}</h2>
        <p class="categoria"><strong>Categoria:</strong> ${produto.categoria}</p>
        <p class="preco"><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
      </div>
    `;
  } catch (erro) {
    console.error('Erro ao carregar os dados:', erro);
    document.getElementById('lista-produtos').innerHTML = `
      <p style="color: red;">Erro ao conectar com a API. Verifique se o backend está rodando!</p>
    `;
  }
}

carregarDados();