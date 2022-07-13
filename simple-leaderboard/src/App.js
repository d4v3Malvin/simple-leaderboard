import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Navbar from './components/navbar'

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
              <Route path='/admin' />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
