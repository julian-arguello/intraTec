export function ModalDeleteButton(props){

    return(

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${props.id}`}>
            Borrar
            </button>


    )
}
export default ModalDeleteButton