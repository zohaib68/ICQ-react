
import './App.css';
import Signin from './modules/auth/pages/Signin'
import Signup from './modules/auth/pages/Signup'
import Dashboard from './modules/Dashboard/pages/Dashboard'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Router />
      </BrowserRouter>
    // </div>
  );
}

export default App;
