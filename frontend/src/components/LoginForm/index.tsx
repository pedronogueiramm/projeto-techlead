import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "types/types";
import { BASE_URL } from "utils/requests";

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        password: ''
    })

    const url = 'http://localhost:8080';
    const requestData = () => {
        axios.get(`${url}/login`,{
            params: {
                email: email,
                password: password
            }
        }).then((response) => {
            setUser(response.data);
            console.log(user);
        });
    }
    useEffect(requestData, []);


    return (
        <div className="login-form">
            <form onSubmit={ requestData }>
                <h2 className="text-center">Entrar</h2>
                <div className="form-group py-3">
                    <input type="text" className="form-control" placeholder="seu@email.com" onChange={event => setEmail(event.target.value)} required />
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

export default LoginForm;