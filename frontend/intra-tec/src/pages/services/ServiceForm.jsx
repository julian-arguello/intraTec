import ServiceFormAdd from "../../components/service/ServiceFormAdd"
import ServiceFormEdit from "../../components/service/ServiceFormEdit";
export function ServiceAdd(props){
    
    return(
        <div>
            
            {!props.edit ? <h2 className="mb-5">Agregar servicio</h2> : <h2 className="mb-5">Editar servicio</h2>}
            {!props.edit ? <ServiceFormAdd /> : <ServiceFormEdit />}
        </div>
        )

}
export default ServiceAdd