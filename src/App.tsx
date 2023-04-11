import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'normalize.css';
import './index.css';
import Footer from './components/Footer';

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
    </div>
      <Footer/>
    </>
    
  );
}

export default App;
