import {MyEditor} from './editor.js';
export function ControlPane(props){
    let [runSelected, setRunSelected] = React.useState(false);

    function playClicked(){
        if(!runSelected){
            //TODO: run handel program
            const handelCode = MyEditor.getValue();
            RunHandel(handelCode);
            setRunSelected(true);
        }
    }

    function stopClicked(){
        if(runSelected){
            //TODO: stop handel program
            StopHandel();
            setRunSelected(false);
        }
    }

    return(
        <div className="controlpane">
            <div onClick={playClicked} className={`mybtn ${runSelected ? "mybtnselected": ""}`}>
                <div className="buttontext">Play</div>
            </div>
            <div onClick={stopClicked} className={`mybtn ${!runSelected ? "mybtnselected": ""}`}>
                <div className="buttontext">Stop</div>
            </div>
        </div>
    )
}