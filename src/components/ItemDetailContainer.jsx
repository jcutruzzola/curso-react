import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail  from "./ItemDetail.jsx"
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [product, setProduct] = useState([])

  useEffect(()=> {
  
    const db = getFirestore()
    
    const item = doc(db, "Productos", `${id}`)

    getDoc(item).then((snapshoot) => {
      if(snapshoot.exists()){
        const doc = snapshoot.data()
        setProduct(doc)
      }
    })
  }, [])

  return (
    <div>

      <ItemDetail
       producto = {product}     
       />

    </div>
  )
}

export default ItemDetailContainer