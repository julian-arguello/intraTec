export function stateClass(state){
    switch(state){
        case "Recepcionado":
            return "box-recepcionados";

        case "Revisado":
            return "box-proceso";
        
        case "Reparado":
            return "box-reparados";
        
        case "Sin reparación":
            return "box-sinreparacion";

        default:
            return "";
    }
}

export function stateIcon(state) {
    switch(state) {
        case "Recepcionado":
            return (
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                    <span>Recepcionado</span>
                    <span className="icon-recepcionado ms-3"></span>  
                </div>
            );

        case "Revisado":
            return (
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center w-100">
                    <span>Revisado</span>
                    <span className="icon-revisado ms-3"></span>  
                </div>
            );
        
        case "Reparado":
            return (
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center w-100">
                    <span>Reparado</span>
                    <span className="icon-reparado ms-3"></span>  
                </div>
            );
        
        case "Sin reparación":
            return (
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center w-100">
                    <span>Sin reparación</span>
                    <span className="icon-irreparable ms-3"></span>  
                </div>
            );
    }
}    


