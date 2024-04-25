import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/register'element={<h1>Register Page!</h1>}/>
      <Route path='/login'element={<h1>Loginpage!</h1>}/>
    </Routes>
   </Router>
  );
}

export default App;
