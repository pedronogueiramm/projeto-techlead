import axios from "axios";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { User } from "types/types";
import { BASE_URL } from "utils/requests";



const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //const emailA = "pedro@email.com"
    //const passwordA = "123"

    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        password: ''
    })

    const requestData = (evt: any) => {
        evt.preventDefault();
        axios.get(`${BASE_URL}/login`, {
            params: {
                email: email,
                password: password
            }
        }).then((response) => {
            setUser(response.data);

        });
    }

    if (user.id) {
        window.sessionStorage.setItem("user_id", String(user.id));
        window.sessionStorage.setItem("user_name", String(user.name));
        window.sessionStorage.setItem("user_email", String(user.email));
        window.sessionStorage.setItem("user_password", String(user.password));
        window.sessionStorage.setItem("user_role", String(user.role));
        return <Redirect push to={{
            pathname: '/home',
            state: user
        }} />
    } else {

        return (
            <div className="login-form">
                <form onSubmit={requestData}>
                    <h2 className="text-center">Entrar</h2>
                    <div className="form-group py-3">
                        <input type="email" className="form-control" placeholder="seu@email.com" onChange={event => setEmail(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <input type="password" className="form-control" placeholder="senha" onChange={event => setPassword(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <button type="submit" className="btn btn-warning btn-block" >Entrar</button>
                    </div>

                </form>
                
                <Link to="/create-user">
                    <p className="text-center"><button className="btn btn-warning">Criar nova conta</button></p>
                </Link>

            </div>

        );
    }
}




export default LoginForm;