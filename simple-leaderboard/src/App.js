import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";

import Home from './pages/Home'
import Navbar from './components/navbar'
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route
              path="/"
              element={<Home />}
              />
              <Route path='/admin' element={<Admin />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
