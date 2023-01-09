
import { Button } from 'react-native-elements';

export function BotaoAcao({
  titulo,
  acao,
  desativado,
  estilo
}) {
  return (
    <Button
      title={titulo}
      onPress={() => acao()}
      disabled={desativado}
      containerStyle={estilo}
    />
  )
}