import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'normalize.css';
import './index.css';
import PrintRequestsTable from './components/PrintTable';


function App() {
  return (
    <>
    <div className="container">
      <Header
        username="User"
        onLogout={() => {
          throw new Error('Function not implemented.');
        }}
      />
      <Sidebar isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <div>
      <PrintRequestsTable/>
    </div>
      
    </div>
    
      
    

  
   
    </>
    
  );
}

export default App;