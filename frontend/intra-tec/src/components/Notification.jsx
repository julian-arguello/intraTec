import { useNotify } from "../context/Notify.Context";

export function Notification(){

    const{ state, notify } = useNotify() 

    return(
        <>
        {state.notification.hasOwnProperty('msj') && 
        
        <div className="alert alert-success w-100 w-sm-50 m-auto d-flex justify-content-between align-items-center notification" role="alert">
            {state.notification.msj}
            <span className="icon-sin-reparacion" role="button" onClick={()=>(notify({}))}></span>
        </div>
        }
        </>
    )
}