import UserCreateForm from '../../components/users/UserCreateForm';
import UserList from '../../components/users/UsersList';
import { useState, useEffect } from 'react';
import { useUser } from "../../context/User.Context";

export function Users(){

    const [section, setSection] = useState(0)

    function renderSwitch(param) {

        switch(param) {
          case 0:
            return <UserList />;
          case 1:
            return <UserCreateForm />;
        }
      }
      
    return (
        <div>
            <h2>Gestionar usuarios</h2>
            <button className={(section == 0 ? 'active btn-primary ' : ' ') + 'btn'} onClick={()=>(setSection(0))}>Listado de usarios</button>
            <button className={(section == 1 ? 'active btn-primary ' : ' ') + 'btn'} onClick={()=>(setSection(1))} >Crear usuario</button>
            <div>
                {renderSwitch(section)}
            </div>
        </div>
    )
}
export default Users