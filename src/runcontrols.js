
export function RunControls(props){
    return(
        <div className="col">
            <div className="container">
            <div className="row d-flex flex-row justify-content-end">
                <div className="w-50 m-1 text-center">HNDL</div>
            </div>
            <div className="row d-flex flex-row justify-content-end">
                <a className="d-block w-50 m-1 text-center">Play</a>
            </div>
            <div className="row d-flex flex-row justify-content-end">
                <a className="w-50 d-block m-1 text-center">Stop</a>
            </div>
            </div>
        </div>
    )
}