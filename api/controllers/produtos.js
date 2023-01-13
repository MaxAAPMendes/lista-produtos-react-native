import { config } from '../config';

export class Produtos {

  async consultarProdutos() {
    const { rest } = config();
    try {
      console.log("consultando produtos...");
      const token = localStorage.getItem('tokenSalvoUser');
      const produtos = await rest.get('storeProducts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
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
      const { status, data } = erro?.response;
      return {
        status: "erro",
        statusCode: status || 500,
        mensagem: data.message || "Erro ao consultar produtos",
        dados: erro
      };
    }
  }
}

const controllerProdutos = new Produtos();
export default controllerProdutos;