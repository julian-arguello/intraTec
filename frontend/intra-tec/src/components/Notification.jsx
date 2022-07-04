import { useNotify } from "../context/Notify.Context";

export function Notification(){

    const{ state, notify } = useNotify() 

    if(state.notification.hasOwnProperty('msj')){
        setTimeout( () => notify({}), 10000);
    }
    

    return(
        <>
        {state.notification.hasOwnProperty('msj') && 
        
        <div className="alert alert-success m-auto d-flex justify-content-between align-items-center notification p-2" role="alert">
            {state.notification.msj}
            <span className="icon-cancel icon-cancel-notification" role="button" onClick={()=>(notify({}))}></span>
        </div>
        }
        </>
    )
}