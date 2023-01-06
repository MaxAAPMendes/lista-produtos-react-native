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