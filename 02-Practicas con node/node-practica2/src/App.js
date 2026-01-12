import logo from './logo.svg';
import './App.css';
import Coche from './Componentes/Coche';

function App() {
  return (
    <div className="App">
      <Coche matricula="1234ABC" precio={20000}/>
    </div>
  );
}

export default App;
