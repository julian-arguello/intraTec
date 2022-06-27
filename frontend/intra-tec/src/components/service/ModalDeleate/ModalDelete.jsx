import { useNavigate  } from 'react-router-dom';
import { useService } from '../../../context/Service.Context';
import { useNotify } from '../../../context/Notify.Context';

export function ModalDelete(props){

    let navigate = useNavigate();
    const { delService } = useService()
    const{ notify } = useNotify()

    function remove(){
        console.log("elimino service id *-> ", props.id);
        delService(props.id)
        .then(()=>{
            notify({msj: 'El servicio se borro correctamente.'})
            navigate('/servicios')
        })
    }


    return(
        <div className="modal fade" id={`modal${props.id}`}  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">confirmación</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            Estas a punto de borrar el servicio estas seguro ?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancelar</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>remove()}>borrar</button>
            </div>
            </div>
        </div>
        </div>
    )
}
export default ModalDelete