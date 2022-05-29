import { createContext, useState, useContext } from "react";
import API from '../api/service.api';

export const ServicesContext = createContext();


//se encarga de manejar todo la info de Clientes.
export function ServicesProvider(props) {
    const [services, setService] = useState([])


/*---------------------------------------------------------------*/
//crear
const newService = async (service) =>{
    console.log('newClient-Context',service)
    return await API.newService(service)
    .catch(() => {
        setService([...services, service])
         throw new Error('Error al crear el Cliente');
     })
     
}

/*---------------------------------------------------------------*/

    return (
        <ServicesContext.Provider value={{ services, setService, newService }}>
            {console.log('ServicesContext.Provider')}
            {props.children}
        </ServicesContext.Provider>
    )
}

export function useServices() {
    const context = useContext(ServicesContext);
    if (context === undefined) {
        throw new Error("useClients debe utilizarse dentro de un ClientsProvider");
    }
    return context;
}