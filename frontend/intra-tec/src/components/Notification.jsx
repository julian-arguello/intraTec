import { useNotify } from "../context/Notify.Context";

export function Notification(){

    const{ state, notify } = useNotify() 

    return(
        <>
        {state.notification.hasOwnProperty('msj') && 
        
        <div className="alert alert-success" role="alert">
        {state.notification.msj}

        <span className="btn" onClick={()=>(notify({}))}>cerrar</span>
        </div>
        }
        </>
    )
}