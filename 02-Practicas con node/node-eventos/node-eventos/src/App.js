import './App.css';
import Caja from './Componentes/Caja';
import Salario from './Componentes/Salario';

function App() {
  return (
    <div className="App">
       <Salario salario_total={1000} impuestos={15} />   
       {/* Le pasamos 2 valores predefinidos */}
       <Caja /> 
    </div>
  );
}

export default App;
