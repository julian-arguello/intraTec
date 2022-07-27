import ServiceFormAdd from "../../components/service/ServiceFormAdd"
import ServiceFormEdit from "../../components/service/ServiceFormEdit";

export function ServiceAdd(props){    
    return(
        <div>
            {!props.edit ? <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">Agregar servicio</h2> : <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">Editar servicio</h2>}
            {!props.edit ? <ServiceFormAdd /> : <ServiceFormEdit />}
        </div>
    )
}
export default ServiceAdd