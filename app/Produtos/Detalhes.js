import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { Produtos } from '../models/produtos';
import { ProdutoFavorito } from './ProdutoFavorito';
import controllerProdutos from '../../api/controllers/produtos';
// import MapView, { Marker } from 'react-native-maps';

const estilo = StyleSheet.create({
  container: {
    // backgroundColor: "#f2f2f2",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#2673b3",
    margin: "20px"
  },
});

export function DatalhesProduto({ route }) {
  const cabecalho = Produtos.dadosCabecalho().filter((i) => i.campo !== 'detalhes');
  const camposDetalhes = Produtos.camposDetalhes();
  const [detalhesProduto, setDetalhesProduto] = useState(null);
  const { produto } = route.params;
  useEffect(() => {
    async function consultarDetalhes() {
      const detalhes = await controllerProdutos.consultarDetalhesProduto(produto._id);
      console.log(detalhes);
      setDetalhesProduto({
        lojas: detalhes.dados.stores || []
      })
    };
    consultarDetalhes();
  }, []);
  const { container, titulo } = estilo;
  return (
    <View style={container}>
      <Text h5 style={titulo}>
        Detalhes do Produto
      </Text>
      {
        produto && (
          <View style={{ width: "95%" }}>
            <ListItem>
              {
                cabecalho.map((item) => (
                  <ListItem.Content key={`cont-${item.rotulo}`}>
                    <ListItem.Title key={`title-${item.rotulo}`}>{item.rotulo}</ListItem.Title>
                  </ListItem.Content>
                ))
              }
            </ListItem>
            <ListItem>
              {
                camposDetalhes.map((campo) => (
                  <ListItem.Content key={`cont-fav${produto[campo]}`}>
                    <ListItem.Subtitle key={`lifav${produto[campo]}`}>
                      {campo === 'favorite'
                        ? <ProdutoFavorito produto={produto}/>
                        : produto[campo]
                      }
                    </ListItem.Subtitle>
                  </ListItem.Content>
                ))
              }
            </ListItem>
            {/* {
              (detalhesProduto && detalhesProduto.lojas.length) && (
                <>
                  <Text>Lojas:</Text>
                  <div>
                    {
                      detalhesProduto.lojas.map((loja) => (
                        <>
                          <span id={`nomeloja${loja.name}`}>{loja.name}</span>
                          <span id={`endloja${loja.name}`}>{loja.address}</span>
                          <hr />
                        </>
                      ))
                    }
                  </div>
                </>
              )
            } */}
          </View>
        )
      }
      {/* -15.844001313056182, -48.02588957644806 */}
      <View>
        <MapView
          showsUserLocation={true} //destacando a localização do usuário no mapa
     	    showsMyLocationButton={false}	//ocultando o btn que move o mapa para a localização do usuário
          toolbarEnabled={false}//ocultando opções do google maps ao clicar em objetos do mapa
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',		
          }}	// Fazendo com que o mapa ocupe a tela inteira
          initialRegion={{
            latitude: 37.78825,	//posição inicial do mapa
            longitude: -122.4324, //posição inicial do mapa
            latitudeDelta: 0.0922,  	//determina o zoom do mapa
            longitudeDelta: 0.0421,	//determina o zoom do mapa
            // ...coords	// Aqui sobrescrevemos as variáveis latitude e longitude com a posição do usuário obtida no hook que criamos para obter a localização.
          }}
        >
          {detalhes.dados.stores.map((loja, index) => (
            <Marker
              key={`loja-${loja.name}`}
              coordinate={{ latitude : loja.latitude, longitude: loja.longitude }}
              title={loja.name}
              description={loja.address}
            />
          ))}
        </MapView>
      </View>
    </View>
  )
}