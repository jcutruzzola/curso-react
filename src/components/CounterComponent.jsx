import React from 'react'
import useCounter from '../hooks/useCounter'


const CounterComponent = () => {

    const { contador, suma, resta } = useCounter(0, 2)



  return (
    <div>
        <h2>Contador {contador}</h2>
        <button onClick = {resta}>Restar</button>
        <button onClick = {suma}>Sumar</button>
    </div>
  )
}

export default CounterComponent