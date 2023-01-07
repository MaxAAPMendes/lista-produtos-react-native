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
Você utilizará a API MBA Presencial - Trabalho Final - Realiza o cadastro do usuário /storeProducts/signup
FEITO - Utilizar o Yup para realizar a validação

## MENU LATERAL
Em todas as telas principais (1a tela do Stack), deverá aparecer um menu lateral com as opções:
Nome do usuário
Principal (Tela de produtos)
favoritos (Tela de favoritos)
Botão de logout

## TELA DE PRODUTOS
FEITO - Tela que exibirá em uma lista os dados dos produtos
Cada item deverá mostrar: Nome do Produto, Preço do Produto, Favorito e um botão de visualizar detalhe (Ir a tela Detalhe do produto).
Esse ListView utilizará a paginação de resultados.
Você utilizará a API MBA Presencial - Trabalho Final - Busca todos os produtos /storeProducts/
Ao carregar a tela, deverá buscar a posição do usuário.