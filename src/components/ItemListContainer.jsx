import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import ItemList from './ItemList'
import { collection, getFirestore, getDocs  } from 'firebase/firestore'



// Componente contenedor

const ItemListContainer = ({ greetings }) => {

  const { categoryId } = useParams()

  const [products, setProducts] = useState([])

  useEffect(()=> {
    
    const db = getFirestore()
    
    const itemsCollection = collection(db, "Productos")

    getDocs(itemsCollection).then((item) => {
      const docs = item.docs.map((doc) => doc.data())
      setProducts(docs)
        
      })
    
    }, [])

  const productosFiltrados = products.filter((producto) => producto.categoria == categoryId)




  return (

    <div>

       <Heading size='lg' fontSize='50px'>
       {greetings}
      </Heading>

      {
        categoryId ? <ItemList productos = {productosFiltrados}/> : <ItemList productos = {products}/> 
      }

 
    </div>
  )
}

export default ItemListContainer