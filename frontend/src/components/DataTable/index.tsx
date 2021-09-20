import axios from 'axios';
import Pagination from 'Pagination';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Book, BookPage, User } from 'types/types';
import { formatLocalDate } from 'utils/format';
import { BASE_URL } from 'utils/requests';

const DataTable = () => {
    const [status, setStatus] = useState({
        status: ''
    });
    const [pageActive, setPageActive] = useState(0);
    const [page, setPage] = useState<BookPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    const user: User = {
        id: Number(window.sessionStorage.getItem("user_id")),
        name: String(window.sessionStorage.getItem("user_name")),
        email: String(window.sessionStorage.getItem("user_email")),
        password: String(window.sessionStorage.getItem("user_password")),
        role: Number(window.sessionStorage.getItem("user_role"))
    }

    const requestData = () => {
        axios.get(`${BASE_URL}/books?page=${pageActive}&size=10&sort=releaseDate,desc`).then((response) => {
            setPage(response.data);
        });
    }

    useEffect(requestData, [pageActive, status]);

    const changePage = (index: number) => {
        setPageActive(index);
    }


    const deleteBook = (id: number) => {
        axios.delete(`${BASE_URL}/books/delete/${id}`)
            .then(() => setStatus({ status: 'Delete successful' }));;
    }

    const history = useHistory();
    const editBook = (book: Book) => {
        window.sessionStorage.setItem("book_id", String(book.id));
        window.sessionStorage.setItem("book_name", book.name);
        window.sessionStorage.setItem("book_detail", book.detail);
        window.sessionStorage.setItem("book_releaseDate", book.releaseDate);
        window.sessionStorage.setItem("book_active", String(book.active));

        let path = `/edit`
        history.push(path);
    }

    const viewBook = (book: Book) => {
        window.sessionStorage.setItem("book_id", String(book.id));
        window.sessionStorage.setItem("book_name", book.name);
        window.sessionStorage.setItem("book_detail", book.detail);
        window.sessionStorage.setItem("book_releaseDate", book.releaseDate);
        window.sessionStorage.setItem("book_active", String(book.active));

        let path = `/view`
        history.push(path);
    }

    return (
        <>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Título do Livro</th>
                            <th>Autor</th>
                            <th>Data de Lançamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        {page.content?.map(x => (
                            <tr key={x.id}>
                                <td>{x.name}</td>
                                <td>{x.user.name}</td>
                                <td>{formatLocalDate(x.releaseDate, "dd/MM/yyyy")}</td>
                                <td><button className="btn btn-primary" onClick={() => viewBook(x)}>ver</button> {user.id === x.user.id || user.role === 1 ? <button className="btn btn-success " onClick={() => editBook(x)} >editar</button> : ''} {user.id === x.user.id || user.role === 1 ? <button className="btn btn-danger " onClick={() => deleteBook(x.id)}>excluir</button> : ''}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
            <Pagination page={page} onPageChange={changePage} currentPage={pageActive} />
        </>
    );
}

export default DataTable;
