export function adicionarFlagFavorito(listaProdutos) {
  listaProdutos.forEach((produto) => produto.favorite = true);
  return listaProdutos;
}