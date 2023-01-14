import { config } from '../config';

export class Produtos {

  async consultarProdutos(pagina) {
    const { rest } = config();
    try {
      console.log("consultando produtos...página", pagina);
      // const token = localStorage.getItem('tokenSalvoUser');
      // const produtos = await rest.get(`storeProducts?page=${pagina}`, {
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //     'Content-Type': 'application/json'
      //   }
      // })
      const produtos = await rest.get(`storeProducts?page=${pagina}`);
      console.log("lista de produtos", produtos);
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
      console.log("Erro ao consultar produtos", erro);
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
      console.log(favoritos);
      let listaFavoritos;
      if (favoritos && favoritos.status === 200) {
        listaFavoritos = favoritos.data.products || [];
      }
      return {
        status: "sucesso",
        dados: listaFavoritos
      }
    } catch(erro) {
      console.log("Erro a consulta favoritos", erro);
      return {
        status: "erro",
        mensagem: erro.message || "Erro ao consultar produtos favoritos",
      }
    }
  }
}

const controllerProdutos = new Produtos();
export default controllerProdutos;