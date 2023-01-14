import { config } from '../config';

export class Produtos {

  async consultarProdutos(pagina) {
    const { rest } = config();
    try {
      const produtos = await rest.get(`storeProducts?page=${pagina}`);
      const {
        data,
        statusText
      } = produtos;
      return {
        status: "sucesso",
        mensagem: statusText,
        dados: data
      };
    } catch (erro) {
      return {
        status: "erro",
        mensagem: erro.message || "Erro ao consultar produtos",
      };
    }
  }

  async consultarProdutosFavoritos() {
    const { rest } = config();
    try {
      const favoritos = await rest.get('storeProducts/getFavProducts');
      let listaFavoritos;
      if (favoritos && favoritos.status === 200) {
        listaFavoritos = favoritos.data.products || [];
      }
      return {
        status: "sucesso",
        mensagem: "Dados buscados com sucesso",
        dados: listaFavoritos
      }
    } catch(erro) {
      return {
        status: "erro",
        mensagem: erro.message || "Erro ao consultar produtos favoritos",
      }
    }
  }

  gerenciarRetornoRequisicao(statusCode) {
    let status = "erro";
    let mensagem = "Hmm, aconteceu um erro. Tente novamente"
    switch (statusCode) {
      case 200:
        status = "sucesso",
        mensagem = "produto alterado"
        break;
      case 201:
        mensagem = "Usuário não encontrado"
        break;
      case 202:
        mensagem = "Produto não encontrado"
        break;
      case 422:
        mensagem = "Erro de validação"
        break;
      default:
        break;
    }
    return {
      status,
      mensagem
    }
  }

  async gerenciarFavorito(body) {
    const { rest } = config();
    try {
      const favorito = await rest.post('storeProducts/manageFavorite', body);
      return this.gerenciarRetornoRequisicao(favorito.status);
    } catch (error) {
      return {
        status: "erro",
        mensagem: error.message || "Erro ao marcar/desmarcar favorito"
      }
    }
  }
}

const controllerProdutos = new Produtos();
export default controllerProdutos;