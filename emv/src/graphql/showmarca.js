import gql from 'graphql-tag'


export const showcar = gql`
uery MarcaId($cifm: ID!) {
  marcaId(cifm: $cifm) {
    datamar {
      cifm
      nombre
      carpormarca {
        codcoche
        nombre
        modelo
        precio
        Combustible
        descripcion
        Ano
        Kilometros
        imagen
        marchas
      }
    }
  }
}`