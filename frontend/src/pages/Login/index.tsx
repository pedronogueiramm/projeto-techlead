import Footer from "components/Footer";
import LoginForm from "components/LoginForm";
import NavBar from "components/NavBar";


const Login = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <LoginForm />

            </div>
            <Footer />
        </>
    );
}

export default Login;