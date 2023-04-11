import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'normalize.css';
import './index.css';
import SolicitationButton from './components/SolicitationButton'
import SearchBar from './components/SearchBar';

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
      <SearchBar onSearch={() => console.log('falta implementar o resto')}/>
      <SolicitationButton onClick={() => console.log("Click")}/>
    </div>
      
    

  
   
    </>
    
  );
}

export default App;