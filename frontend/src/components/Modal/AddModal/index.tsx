import { User } from "types/types";

type Props = {
    user: User;
}
const AddModal = ({ user }: Props) => {


    return (
        <div className="modal fade" id="addEmployeeModal" role="dialog" aria-labelledby="addEmployeeModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addEmployeeModalLabel">Add Employee</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Nome do Livro</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Nome do livro" required />
                            </div>
                            <div className="form-group">
                                <label>Sinopse</label>
                                <input type="text" name="detail" className="form-control" id="detail" placeholder="Sinopse" required />
                            </div>
                            <div className="form-group">
                                <label>Data de Lançamento</label>
                                <input type="text" name="releaseDate" className="form-control" id="releaseDate" placeholder="2021-01-25" required />
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="add-employee-form" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary" >Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )

}

export default AddModal;