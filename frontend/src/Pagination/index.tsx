import { BookPage } from "types/types";

type Props = {
    page: BookPage;
    onPageChange: Function;
    currentPage: number;
}

const Pagination = ({ page, onPageChange, currentPage }: Props) => {


    return (
        <div className="row d-flex justify-content-center footer mt-auto py-3">
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className={`page-item ${page.number === currentPage ? 'disabled' : ''}`}>
                        <span className="page-link">{page.number + 1}</span>

                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Pagination;