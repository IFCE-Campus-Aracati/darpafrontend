import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import './styles.css';
import PrintRequestsTable from "../../components/PrintTable";
import SearchBar from "../../components/SearchBar";
import SolicitationButton from "../../components/SolicitationButton";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

function UserHome() {
    return (
        <>
         <Header 
            username="User"
            onLogout={() => {
            throw new Error('Function not implemented.');
            }}
        />
        <div className="container">
       
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
                <Pagination totalItems={10} itemsPerPage={5} currentPage={0} onPageChange={function (page: number): void {
                        throw new Error("Function not implemented.");
                    } }/>
             </div>  
        
        </div>
        <Footer/>
        
        
    
    
    
    
        
        </>
        
    );
    }

export default UserHome;