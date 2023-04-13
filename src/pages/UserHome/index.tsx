import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import './styles.css';
import PrintRequestsTable from "../../components/PrintTable";
import SearchBar from "../../components/SearchBar";
import SolicitationButton from "../../components/SolicitationButton";

function UserHome() {
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
         <div className="page-title">Minhas solicitações</div>
        <div className="buttons">
            <SearchBar onSearch={function (term: string): void {
                        throw new Error("Function not implemented.");
                    } }/> 
                    <SolicitationButton onClick={function (): void {
                        throw new Error("Function not implemented.");
                    } }/> 
        </div>
            <div className="data-table">
                <PrintRequestsTable/>
             </div>  
        
        </div>
        
        
        
    
    
    
    
        
        </>
        
    );
    }

export default UserHome;