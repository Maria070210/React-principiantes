import React from 'react'

function Coche(props) {
    //function Coche({matricula, precio}) { y quitas el props de los corchetes
  return (
    <div>
        <h2>Coche</h2>
        <h3>Esto es un coche</h3>
        <p>La matricula del coche es {props.matricula} cuyo precio es {props.precio} €</p>
    </div>
  )
}

export default Coche