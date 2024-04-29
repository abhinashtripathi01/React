// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './page/homepage/Homepage';
import Loginpage from './page/login/Login';
import Register from './page/register/Register';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Loginpage' element={<Loginpage/>} />
        <Route path='/Register' element={<Register/>} />

      </Routes>

    </Router>
  );
}

export default App;

