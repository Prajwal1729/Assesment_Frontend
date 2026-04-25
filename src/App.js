import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import CustomerDetails from './pages/CustomerDetails';
import Transactions from './pages/Transactions';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/customerdetails' element={<CustomerDetails/>} />
        <Route path='/transactions/:accountId' element={<Transactions/>} />
      </Routes>
    </div>
  );
}

export default App;
