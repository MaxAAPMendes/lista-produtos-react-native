export class ModelApp {
  static configStack() {
    const stack = {
      login: {
        title: "Acesso ao Sistema"
      },
      home: {
        title: "Página Principal - Lista Produtos"
      },
      cadastro: {
        title: "Cadastrar novo usuário"
      }
    }
    return stack;
  }

  executaAcaoPorTempo(acao, tempo) {
    console.log("funcao por tempo")
    setTimeout(() => {
      acao();
    }, tempo);
  }
}

const modelApp = new ModelApp();
export default modelApp;

