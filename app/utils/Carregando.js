import { Skeleton } from '@rneui/themed';

export function Carregando() {
  const carregando = [];
  for (let index = 0; index <= 4; index++) {
    carregando.push(
      <Skeleton
        key={`componente-${index}`}
        animation="pulse"
        width={"100%"}
        height={60}
        style={{ marginBottom: "20px"}}
      />
    )
  }
  return carregando;
}