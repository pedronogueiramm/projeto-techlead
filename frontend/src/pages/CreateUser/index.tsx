import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const CreateUser = () => {
    return (
        <>
            <>
                <NavBar />
                <div className="container">
                    <div className="login-form">
                        <form action="/examples/actions/confirmation.php" method="post">
                            <h2 className="text-center">Cadastrar Nova Conta</h2>
                            <div className="form-group py-3">
                                <input type="text" className="form-control" placeholder="seu@email.com" required />
                            </div>
                            <div className="form-group py-3">
                                <input type="password" className="form-control" placeholder="senha" required />
                            </div>
                            <div className="form-group py-3">
                                <Link to="/">
                                    <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
                                </Link>

                            </div>
                            
                        </form>

                    </div>

                </div>
                <Footer />
            </>
        </>
    );
}

export default CreateUser;