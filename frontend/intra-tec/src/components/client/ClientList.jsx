import ClintItem from './ClientItem';
import { useClient } from '../../context/Client.Context';

export function ClientList(){

    const { state } = useClient()

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gx-0 gx-sm-3">
            {state.clients.map((client)=>(
            <ClintItem key={client._id} client ={client}/>
            ))}
        </div>
    )
}
export default ClientList;