export function ModalDelete(props){

    return(
        <div className="modal fade" id={`exampleModalLabel${props.id}`} aria-labelledby={`exampleModalLabel${props.id}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Seguro quieres eliminar este servicio</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary">Ok Eliminar</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDelete