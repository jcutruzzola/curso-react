import React from 'react'
import { useParams } from 'react-router-dom'
import { Text, Flex, Center } from '@chakra-ui/react'
import ItemList from './ItemList'


// Componente contenedor

const ItemListContainer = ({ greetings }) => {

  const { categoryId } = useParams()
  console.log(categoryId);


  const productos = [
  {id: 1, nombre: "Producto A", descripcion: "Descripcion A", precio: 1500, categoria: "informal"},
  {id: 2, nombre: "Producto B", descripcion: "Descripcion B", precio: 2000, categoria: "formal"},
  {id: 3, nombre: "Producto C", descripcion: "Descripcion C", precio: 3500, categoria: "ninios"},
  {id: 4, nombre: "Producto D", descripcion: "Descripcion D", precio: 3000, categoria: "formal"},
  {id: 5, nombre: "Producto E", descripcion: "Descripcion E", precio: 4500, categoria: "deportivo"},
  {id: 6, nombre: "Producto F", descripcion: "Descripcion F", precio: 5500, categoria: "formal"},
  {id: 7, nombre: "Producto G", descripcion: "Descripcion G", precio: 4000, categoria: "informal"},
  {id: 8, nombre: "Producto H", descripcion: "Descripcion H", precio: 3500, categoria: "ninios"},
  {id: 9, nombre: "Producto I", descripcion: "Descripcion I", precio: 2500, categoria: "informal"},
  {id: 10, nombre: "Producto J", descripcion: "Descripcion J", precio: 1500, categoria: "deportivo"}
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
  
    if(productos.length > 0) {
      setTimeout( () => {
        resolve(productos)
      }, 2000)
    } else {
      reject("No se obtuvieron productos")
    
    }
  })

  mostrarProductos
  .then((resultado) => {
    // console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  
  })

  const productosFiltrados = productos.filter((producto) => producto.categoria == categoryId)




  return (

    <div>

      {
        categoryId ? <ItemList productos = {productosFiltrados}/> : <ItemList productos = {productos}/> 
      }

 
    </div>
  )
}

export default ItemListContainer