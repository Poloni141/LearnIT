import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryID' element={<ItemListContainer />} />
          <Route path='/book/:itemID' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 Site not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
