export function stateClass(state){
    switch(state){
        case "Recepcionado":
            return "alert-secondary";

        case "Revisado":
            return "alert-warning";
        
        case "Reparado":
            return "alert-success";
        
        case "Sin reparación":
            return "alert-danger";

        default:
            return "";
    }
}
export default stateClass;