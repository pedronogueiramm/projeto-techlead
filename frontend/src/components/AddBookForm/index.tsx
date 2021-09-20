import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { User } from "types/types";
import { FormataStringData } from "utils/format";
import { BASE_URL } from "utils/requests";

const AddBookForm = () => {


    const [detail, setDetail] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [name, setName] = useState('');

    const user: User = {
        id: Number(window.sessionStorage.getItem("user_id")),
        name: String(window.sessionStorage.getItem("user_name")),
        email: String(window.sessionStorage.getItem("user_email")),
        password: String(window.sessionStorage.getItem("user_password")),
        role: Number(window.sessionStorage.getItem("user_role"))
    }

    const newBook = {
        name: name,
        detail: detail,
        releaseDate: String(FormataStringData(releaseDate)),
        active: true,
        user: user
    }

    const url = 'http://localhost:8080';
    const requestData = (evt: any) => {
        evt.preventDefault();
        axios.post(`${BASE_URL}/books/add`, newBook).then((response) => {
            addBookButton()
        });
    }

    const history = useHistory();

    const addBookButton = () => {
        let path = `/home`
        history.push(path);
    }


    return (
        <div className="container">
            <div className="login-form">
                <form onSubmit={requestData}>
                    <h2 className="text-center">Adicionar Livro</h2>
                    <div className="form-group py-3">
                        <input type="text" className="form-control" placeholder="Título do Livro" onChange={event => setName(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <input type="text" className="form-control" id="date" placeholder="27/10/1995" onChange={event => setReleaseDate(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <textarea className="form-control" placeholder="Sinopse" onChange={event => setDetail(event.target.value)} required />
                    </div>
                    <div className="form-group py-3">
                        <div className="form-group py-3 d-flex justify-content-between">
                            <button type="submit" className="btn btn-warning btn-block" >Adicionar</button>
                            <p className="btn btn-light btn-block ml-4" ><Link to="/home">Voltar</Link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );


}

export default AddBookForm;