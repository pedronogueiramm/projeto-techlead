import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "utils/requests";

const CreateUserForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    //testando request sem os inputs do form
    const newUser = {
        name: name,
        email: email,
        password: password,
        role: 2
    }

    const url = 'http://localhost:8080';
    const requestData = (evt: any) => {
        evt.preventDefault();
        axios.post(`${url}/users/add`, newUser).then((response) => {
            redirectToLogin();
        });

    }

    const history = useHistory();
    const redirectToLogin = () => {
        let path = `/`;
        history.push(path);
    }


    return (
        <div className="container">
            <div className="login-form">
                <form onSubmit={requestData}>
                    <h2 className="text-center">Cadastrar Nova Conta</h2>
                    <div className="form-group py-3">
                        <input type="text" className="form-control" placeholder="Seu Nome" onChange={event => setName(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <input type="email" className="form-control" placeholder="seu@email.com" onChange={event => setEmail(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <input type="password" className="form-control" placeholder="senha" onChange={event => setPassword(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">

                        <div className="form-group py-3">
                            <button type="submit" className="btn btn-warning btn-block" >Cadastrar</button>
                        </div>


                    </div>

                </form>

            </div>

        </div>
    );

}

export default CreateUserForm;