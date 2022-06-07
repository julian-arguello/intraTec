import { useParams } from 'react-router-dom';

function Client(props){

    //parametro id
    const {id} = useParams();

    return(
        <h2>Cliente {id}</h2>
    )
}
export default Client;