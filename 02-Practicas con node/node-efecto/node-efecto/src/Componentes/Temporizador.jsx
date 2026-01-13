import React,{useEffect,useState} from 'react'
{/* 
  useState --> gestiona datos que cambian (re-renderizado), 
  mientras que useEffect --> maneja lógica externa como llamadas a APIs, 
  suscripciones o cambios en el DOM tras renderizarse el componente.  
*/}

function Temporizador() {

   const [contador, setcontador] = useState(0)

  {/* setTimeOut es un sleep */}

  useEffect(() => {
    //Operacion a realizar  
    setTimeout(() => {
        setcontador(contador+1);
    }, 1000);
  })
   //Condicion de disparo


   {/* 
    useEffect(() => {
        //Operacion a realizar  
        setTimeout(() => {
            setcontador(contador+1);
        }, 1000);
      }, []) Si lo pones asi solo se dispara una vez
    */}

    {/* 
    useEffect(() => {
        //Operacion a realizar  
        setTimeout(() => {
            setcontador(contador+1);
        }, 1000);
      }, [propiedad, propiedad1]) Se pueden poner 1 o varios
      Se dispararía el hook de efecto cuando cambie alguno de estos valores
    */}



  return (
    <div>Temporizador
        <p>{contador}</p>
    </div>
  )
}

export default Temporizador