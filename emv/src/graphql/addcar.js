import gql from 'graphql-tag'


export const addcar = gql`
mutation Mutation($car: carInput!) {
    addcar(car: $car) {
      message
      data {
        codcoche
        nombre
        modelo
        Precio
        Combustible
        descripcion
        Ano
        Kilometros
        imagen
        marchas
        status
      }
    }
  }`