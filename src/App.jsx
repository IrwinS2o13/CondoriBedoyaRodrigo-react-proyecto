import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

import './components/NavBar.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount.js';





function App() {
  return (
      <div>
            <NavBar />
            <ItemListContainer saludo="hola"/>
            <ItemCount stock="10"/>
      </div>
  );
}

export default App;
