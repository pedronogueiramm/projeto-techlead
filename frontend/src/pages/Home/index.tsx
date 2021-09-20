import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const addBookButton = () => {
        let path = `/addBook`
        history.push(path);
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="d-flex"><h1>Seja bem vindo {window.sessionStorage.getItem("user_name")}</h1></div>
                    <button onClick={() => addBookButton()} className={`btn btn-warning btn-lg col-sm-2 ${window.sessionStorage.getItem("user_id") ? '' : 'disabled'}`}>Cadastrar Novo Livro</button>
                </div>
                <h1 className="text-primary col-sm-6">Lista de Livros Cadastrados</h1>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Home;
