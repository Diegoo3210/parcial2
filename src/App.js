import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Bandas from './components/Bandas';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bandas />} />
          <Route path="/bandas" element={<Bandas />} />
          <Route path="/bandas/:bandasId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
