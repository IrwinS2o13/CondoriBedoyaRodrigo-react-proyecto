import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'

import './components/NavBar.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount.js';





function App() {
  return (
      <div>
            <NavBar />
            <br></br>
            <ItemCount stock="10"/>
            <br></br>
            <ItemListContainer/>
            <ItemDetailContainer />
            
      </div>
  );
}

export default App;
