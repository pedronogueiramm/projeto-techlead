
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Book, User } from "types/types";
import { BASE_URL } from "utils/requests";

const EditBookForm = () => {
 
    const user: User = {
        id: Number(window.sessionStorage.getItem("user_id")),
        name: String(window.sessionStorage.getItem("user_name")),
        email: String(window.sessionStorage.getItem("user_email")),
        password: String(window.sessionStorage.getItem("user_password")),
        role: Number(window.sessionStorage.getItem("user_role"))
    }

    const book: Book = {
        id: Number(window.sessionStorage.getItem("book_id")),
        name: String(window.sessionStorage.getItem("book_name")),
        detail: String(window.sessionStorage.getItem("book_detail")),
        releaseDate: String(window.sessionStorage.getItem("book_releaseDate")),
        active: (String(window.sessionStorage.getItem("book_active")) === 'true'),
        user: user
    }
    const [newName, setName] = useState(book.name);
    const [newDetail, setDetail] = useState(book.detail);
    const [newReleaseDate, setReleaseDate] = useState(book.releaseDate);



    const history = useHistory();
    const backToHome = () => {
        window.sessionStorage.removeItem("book_id");
        window.sessionStorage.removeItem("book_name");
        window.sessionStorage.removeItem("book_detail");
        window.sessionStorage.removeItem("book_releaseDate");
        window.sessionStorage.removeItem("book_active");
        let path = `/home`;
        history.push(path);
    }

    const editBook = () => {
        axios.put(`${BASE_URL}/books/update`, 
        {
            id: book.id,
            name: newName,
            detail: newDetail,
            releaseDate: newReleaseDate,
            active: book.active,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }

        });
        backToHome();
    }

    return (

            <div className="container">
                <div className="login-form">
                    <form >
                        <h2 className="text-center">Editar Livro</h2>
                        <div className="form-group py-3">
                            <label >Título do livro</label>
                            <input type="text" className="form-control" defaultValue={book.name} onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="form-group py-3">
                            <label >Data de lançamento</label>
                            <input type="text" className="form-control" defaultValue={book.releaseDate} onChange={event => setReleaseDate(event.target.value)}/>
                        </div>
                        <div className="form-group py-3">
                            <label >Sinopse</label>
                            <textarea className="form-control" defaultValue={book.detail} onChange={event => setDetail(event.target.value)}/>
                        </div>
                        <div className="form-group py-3">
                            <div className="form-group py-3 d-flex justify-content-between">
                                <button type="submit" className="btn btn-warning btn-block" onClick={() => editBook()} >Salvar</button>
                                <button className="btn btn-light btn-block ml-4" onClick={() => backToHome()}>Voltar</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>


    );
}

export default EditBookForm;