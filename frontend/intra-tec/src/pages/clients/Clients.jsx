import { Link } from 'react-router-dom';

function Clients(props){

    return(
        <div>
            <h2>Clients</h2>
            <ul>
                <li><Link to='/cliente/1'>Cliente 1</Link></li>
                <li><Link to='/cliente/2'>Cliente 2</Link></li>
            </ul>
        </div>
    )
}
export default Clients;