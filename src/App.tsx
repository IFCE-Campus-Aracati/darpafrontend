import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'normalize.css';
import './index.css'
import SolicitationButton from './components/SolicitationButton'
import SearchBar from './components/SearchBar';
import EditButton from './components/EditButton';
import DeleteButton from './components/DeleteButton';
import ConfirmButton from './components/ConfirmButton';
import CancelButton from './components/CancelButton';
import LoginPg from './pages/Login'
import CreateAccountPg from './pages/CreateAccount';



function App() {
  return (
    <>
    <div className="container">
      
{//      <LoginPg onLogout={()=> console.log("")}/>
}
      <CreateAccountPg onLogout={()=> console.log("")}/>
      
    </div>
   
    </>
    
  );
}

export default App;