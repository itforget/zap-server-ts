import axios from 'axios'

export const BuscarProdutos = async () => {
  const response = await axios.get(
    'https://silver-sniffle-gv79r6gxv7w29p4j-5000.app.github.dev/api/products',
  )
  return response.data
}
