import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="login-form">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <h2 className="text-center">Entrar</h2>
                        <div className="form-group py-3">
                            <input type="text" className="form-control" placeholder="seu@email.com" required/>
                        </div>
                        <div className="form-group py-3">
                            <input type="password" className="form-control" placeholder="senha" required/>
                        </div>
                        <div className="form-group py-3">
                            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                        </div>
                        
                    </form>
                    <Link to="/create-user">
                    <p className="text-center"><a href="https://www.google.com/">Criar nova conta</a></p>
                    </Link>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Login;