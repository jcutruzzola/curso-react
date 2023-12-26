import { useState } from 'react'

const useCounter = (valorInicial = 0, paso = 1) => {
    
    const [contador, setContador] = useState(valorInicial)


const suma = () => {
    setContador((prevCount) => prevCount + paso)

}

const resta = () => {
    setContador ((prevCount) => prevCount - paso)


}

return {
    contador,
    suma,
    resta

}

}

export default useCounter