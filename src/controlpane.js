import {MyEditor} from './editor.js';
export function ControlPane(props){
    let [runSelected, setRunSelected] = React.useState(false);
    let [runCount, setRunCount] = React.useState(0);
    let [errorRunning, setErrorRunning] = React.useState(false);
    window.onError = function(message, source, lineno, colno, error) {
        setErrorRunning(true);
    }

    function playClicked(){
        if(!runSelected){
            //TODO: run handel program
            const handelCode = MyEditor.getValue();
            console.log("try run")
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
            <a href="https://github.com/ddj231/Handel">
                <div className="guide">
                    go to language guide
                </div>
            </a>
        </div>
    )
}