import { useService } from '../../context/Service.Context';

export function HomeStatistics(){

    const { state } = useService()

    return(
        
        <div className="row text-white d-xs-inline d-sm-flex justify-content-between align-items-center text-center text-sm-start">


        <div className="box-recepcionados p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
            <div  className="d-flex align-items-center">
                <p className="h3"><strong>{state.statistics.recepcionado}</strong></p>
            </div>
            <p className="m-0"><strong>Recepcionados</strong></p>
        </div>
        <div className="box-proceso p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
            <div  className="d-flex align-items-center">
                <p className="h3"><strong>{state.statistics.revisado}</strong></p>
            </div>
            <p className="m-0"><strong>En Proceso</strong></p>
        </div>
        <div className="box-reparados p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
            <div  className="d-flex align-items-center">
                <p className="h3"><strong>{state.statistics.reparado}</strong></p>
            </div>
            <p className="m-0"><strong>Reparados</strong></p>
        </div>
        <div className="box-sinreparacion p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
            <div className="d-flex align-items-center">
                <p className="h3"><strong>{state.statistics.sin_reparacion}</strong></p>
            </div>
            <p className="m-0"><strong>Sin Reparación </strong></p>
        </div>
    </div>


    )

}
export default HomeStatistics