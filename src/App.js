import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings = 'Bienvenido a LearnIT, tu plataforma de aprendizaje' />
    </div>
  );
}

export default App;
