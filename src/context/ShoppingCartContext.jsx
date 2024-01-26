import { createContext, useState } from 'react'

export const CartContext = createContext([])

export const ShoppingCartProvider = ({children}) => {

        const [cart, setCart] = useState([])

        const addToCart = (productos, contador)=> {
            const productoAgregado = {...productos, contador}
        
            const newCart = [...cart]
            const isInCart = newCart.find((item) => item.id === productoAgregado.id)
            
            if (isInCart) {
        
              isInCart.contador += contador
              setCart(newCart)
            
            } else {
        
              newCart.push(productoAgregado)
            
            }
        
            setCart(newCart)
          
          }


        const amountInCart = () => {
            return cart.reduce((acc, prod) => acc + prod.contador,0)
        
        }

        const finalValue = () => {
        
            return cart.reduce ((acc, prod) => acc + prod.precio * prod.contador, 0 )
        
        }

        
        const clearCart = ()=> {
            setCart([])
    
        }
      


    return (
        <CartContext.Provider value = {{cart, setCart, addToCart, amountInCart, finalValue, clearCart}}>
            {children}
        </CartContext.Provider>
        
        )

} 

export default ShoppingCartProvider