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
        status,
        data,
        statusText
      } = produtos;
      return {
        status: "sucesso",
        statusCode: status,
        mensagem: statusText,
        dados: data
      };
    } catch (erro) {
      console.log("Erro ao consultar produtos", erro);
      const { response } = erro;
      let status = null;
      let data = null;
      if (response) {
        status = response.status;
        data = response.data;
      }
      // const { status, data } = erro?.response;
      return {
        status: "erro",
        statusCode: status || 500,
        mensagem: data ? data.message : "Erro ao consultar produtos",
        dados: erro
      };
    }
  }

  async consultarProdutosFavoritos() {
    const { rest } = config();
    try {
      const favoritos = await rest.get('storeProducts/getFavProducts');
      console.log(favoritos);
      return {
        status: "sucesso",
        statusCode: 'favoritos.status',
        mensagem: 'favoritos.statusText',
        dados: favoritos.data.products
      }
    } catch(erro) {
      console.log("Erro a consulta favoritos", erro);
      return {
        status: "erro",
        statusCode: 500,
        mensagem: data ? data.message : "Erro ao consultar produtos",
        dados: erro
      }
    }
  }
}

const controllerProdutos = new Produtos();
export default controllerProdutos;