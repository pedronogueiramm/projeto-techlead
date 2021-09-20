
import { useHistory } from "react-router-dom";
import { Book, User } from "types/types";
import { formatLocalDate } from "utils/format";

const ViewBookForm = () => {
 
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


    return (

            <div className="container">
                <div className="login-form">
                    <form >
                        <h2 className="text-center">Detalhes do Livro</h2>
                        <div className="form-group py-3">
                            <label >Título do livro</label>
                            <input type="text" className="form-control" defaultValue={book.name} readOnly />
                        </div>
                        <div className="form-group py-3">
                            <label >Autor</label>
                            <input type="text" className="form-control" defaultValue={book.user.name} readOnly />
                        </div>
                        <div className="form-group py-3">
                            <label >Sinopse</label>
                            <textarea className="form-control" defaultValue={book.detail} readOnly/>
                        </div>
                        <div className="form-group py-3">
                            <label >Data de lançamento</label>
                            <input type="text" className="form-control" defaultValue={formatLocalDate(book.releaseDate,"dd/MM/yyyy")} readOnly />
                        </div>
                        <div className="form-group py-3">
                            <label >Email para contato</label>
                            <input type="text" className="form-control" defaultValue={book.user.email} readOnly />
                        </div>
                        
                        <div className="form-group py-3">
                            <div className="form-group py-3 justify-content-center">
                                <button className="btn btn-warning btn-block ml-4" onClick={() => backToHome()}>Voltar</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>


    );
}

export default ViewBookForm;