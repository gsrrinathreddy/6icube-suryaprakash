import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Iphone from './pages/Iphone';
import Oneplus from './pages/Oneplus';
import Redme from './pages/Redme';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route Path ="/Iphone" element={<Iphone/>}/>
        <Route Path="/Oneplus" element={<Oneplus/>}/>
        <Route Path="/Redme" element={<Redme/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
