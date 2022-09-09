import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavbarComp from './componets/NavbarComp';
function App() {
  return (
    
    <BrowserRouter>
        <NavbarComp/>
        <Routes>
          {/*rutas publicas */}
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
