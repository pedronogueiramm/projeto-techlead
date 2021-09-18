import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="d-flex justify-content-between">
                <h1 className="text-primary col-sm-6">Lista de Livros Cadastrados</h1>
                <p className="btn btn-primary btn-lg col-sm-2">Cadastrar Novo Livro</p>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Home;
