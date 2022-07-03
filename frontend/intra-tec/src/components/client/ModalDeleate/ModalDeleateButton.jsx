export function ModalDeleteButton(props){
    return(
        <button type="button" className="btn-delete d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target={`#modal${props.id}`}>
            <span className="icon-delete me-2"></span>Borrar
        </button>
    )
}
export default ModalDeleteButton