export function ModalDeleteButton(props){

    return(

            <button type="button" class="btn btn-primary" data-bs-toggle={`exampleModalLabel${props.id}`} data-bs-target="#exampleModal">
            Eliminar
            </button>


    )
}
export default ModalDeleteButton