import Home from './pages/Home';
import AddProducts from './pages/admin/AddProducts';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/add-products" element={<AddProducts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
