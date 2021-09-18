import axios from 'axios';
import Pagination from 'Pagination';
import React, { useEffect, useState } from 'react';
import { BookPage } from 'types/types';
import { formatLocalDate } from 'utils/format';
import { REACT_APP_BACKEND_URL } from 'utils/requests';

const DataTable = () => {

    const [pageActive, setPageActive] = useState(0);
    const [page, setPage] = useState<BookPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })


    const requestData = () => {
        axios.get(`${REACT_APP_BACKEND_URL}/books?page=${pageActive}&size=10&sort=releaseDate,desc`).then((response) => {
            setPage(response.data);


        });
    }
    useEffect(requestData, [pageActive]);

    const changePage = (index: number) => {
        setPageActive(index);
    }


    return (
        <>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Título do Livro</th>
                            <th>Criador</th>
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
                                <td>editar excluir</td>
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
