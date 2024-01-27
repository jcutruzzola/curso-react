import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading, Box } from '@chakra-ui/react'
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


    const categoryTexts = {
      ninios: "Niños",
      formal: "Formal",
      informal: "Informal",
      deportivo: "Deportivo"
    
    }

  return (

    <div>
     
      {
        categoryId ?
         <>
         <Box h='150px'justifyContent='center'  padding='2rem'> 
          <Heading size='lg' fontSize='50px'textAlign='center' >
          {categoryTexts[categoryId] || categoryId}

         </Heading> 
         </Box>
         <ItemList productos = {productosFiltrados}/> 
         
         </> :
         
         <>
           <Box h='150px'justifyContent='center'  padding='2rem'>
              <Heading size='lg' fontSize='50px'textAlign='center' >
             {greetings}
             </Heading>
          </Box>

          <ItemList productos = {products}/> 

         </>  
      }

 
    </div>
  )
}

export default ItemListContainer