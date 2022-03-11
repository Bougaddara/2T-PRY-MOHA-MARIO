
import gql from 'graphql-tag'


export const carList = gql`
query  carList  {
    carList {
      codcoche
      imagen
      nombre
      modelo
      Precio
      marchas
      Kilometros
      Ano
      descripcion
  
    }
   
  }`