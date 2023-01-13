export class Produtos {
  static dadosCabecalho() {
    const dados = [
      {
        campo: 'produto',
        rotulo: 'Produto'
      },
      {
        campo: 'preco',
        rotulo: 'Preço'
      },
      {
        campo: 'favorito',
        rotulo: 'Favorito'
      },
      {
        campo: 'detalhes',
        rotulo: 'Detalhes'
      },
    ];
    return dados;
  }

  static camposDetalhes() {
    return ['name', 'price', 'favorite']
  }
}