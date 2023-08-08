import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
        <div className="containerInput">
          <input type="text" placeholder="Digite aqui!"/>
          <button className="buttonSearch">
            <FiSearch size={20} color="#000"/>
          </button>
        </div>
    </div>
  );
}

export default App;
