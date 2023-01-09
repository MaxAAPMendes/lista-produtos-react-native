### PASSOS PARA INSTALAÇÃO DO PROJETO
## REQUISITOS
- node v10+

## INSTALAÇÃO
- npm i -g expo-cli
- expo init listaProdutos
- cd listaProdutos
- npm install formik yup --save

## START
- expo start
- alternative: npm start


ref: https://medium.com/login-do-google-com-react-native-e-expo/login-do-google-com-react-native-e-expo-123282b5c690

#### navigation
/* 
      navigation.navigate("Home");
      navega para a página, contudo guarda a referência das anteriores, permitindo voltar
      // navigation.reset({
      //   index: 0, // zera a pilha
      //   routes: [{ name: "Home" }]
      // });
    */
#### fetch
const apiKey = 'YOUR_API_KEY';
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;
...
   const sendEmailValidationRequest = async (email) => {
      try {
          const response = await fetch.get(apiURL + '&email=' + email);
          const data = await response.json();
          console.log(data)
      } catch (error) {
          throw error;
      }
   }

# REQUISITOS
## TELA DE LOGIN
FEITO - Tela com e-mail e senha para autenticar o usuário:
FEITO - Abaixo aparecerá um botão de realizar cadastro
Você utilizará a API MBA Presencial - Trabalho Final - Realiza o login do usuário /storeProducts/login
FEITO - Utilizar o Yup para realizar a validação

## TELA DE CADASTRO
FEITO - Tela com nome, telefone, e-mail e senha para cadastrar o usuário
FEITO - Você utilizará a API MBA Presencial - Trabalho Final - Realiza o cadastro do usuário /storeProducts/signup
FEITO - Utilizar o Yup para realizar a validação

## MENU LATERAL
Em todas as telas principais (1a tela do Stack), deverá aparecer um menu lateral com as opções:
FEITO - Nome do usuário
FEITO Principal (Tela de produtos)
FEITO - favoritos (Tela de favoritos)
FEITO - Botão de logout

## TELA DE PRODUTOS
FEITO - Tela que exibirá em uma lista os dados dos produtos
FEITO - Cada item deverá mostrar: Nome do Produto, Preço do Produto, Favorito e um botão de visualizar detalhe (Ir a tela Detalhe do produto).
!!!! PENDENTE - Esse ListView utilizará a paginação de resultados.
!!!! PENDENTE - Você utilizará a API MBA Presencial - Trabalho Final - Busca todos os produtos /storeProducts/
Ao carregar a tela, deverá buscar a posição do usuário.

## TELA DE FAVORITOS
FEITO - Tela exibirá os produtos determinados como favoritos dos usuários.
FEITO - A tabela deverá mostrar: Nome do Produto, Preço do Produto, Favorito e um botão de visualizar detalhe (Ir a tela Detalhe do produto).
!!!! PENDENTE - Você utilizará a API MBA Presencial - Trabalho Final - Busca todos os produtos favoritos /storeProducts/getFavProduts

## TELA DETALHES DO PRODUTO
Tela que exibirá os detalhes de um produto.
A tela deverá mostrar:
FEITO - Nome do Produto
FEITO - Preço do Produto
FEITO - Se é Favorito do usuário (e um botão para marcar/desmarcar favorito)
!!!! PENDENTE - Mapa com a posição do usuário e as lojas com o produto disponível
!!!! PENDENTE - Você utilizará a API MBA Presencial - Trabalho Final - Busca informação de um produto /storeProducts/product/:productID e API MBA Presencial - Trabalho Final - Adicionar ou remove um produto como favorito da pessoa /storeProducts/manageFavorite