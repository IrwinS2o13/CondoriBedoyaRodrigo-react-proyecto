import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

import './components/NavBar.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
      <div>
            <NavBar />
            <ItemListContainer saludo="hola"/>
      </div>
  );
}

export default App;
