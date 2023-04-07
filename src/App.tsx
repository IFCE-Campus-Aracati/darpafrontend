import Header from "./components/Header";
import 'normalize.css';
import './index.css';
import Footer from "./components/Footer";

function App() {
 return (
  <>
    <Header username={"User"} onLogout={function (): void {
       throw new Error("Function not implemented.");
     } }/>
  
    <Footer  />
    
  </>
  
 )
}

export default App
