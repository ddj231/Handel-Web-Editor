import {MyEditor} from './editor.js';
import './codemirror-5.59.1/keymap/vim.js' 

export function ControlPane(props){
    let [runSelected, setRunSelected] = React.useState(false);
    let [runCount, setRunCount] = React.useState(0);
    let [vimModeChecked, setVimModeChecked] = React.useState(false);

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

    function handleVimModeChange(){
        if(vimModeChecked){
            MyEditor.setOption("keyMap", "default");
        }
        else{
            MyEditor.setOption("keyMap", "vim");
        }
        setVimModeChecked(!vimModeChecked);
        console.log('handled');
    }

    return(
        <div className="controlpane">
            <div onClick={playClicked} className={`mybtn ${runSelected ? "mybtnselected": ""}`}>
                <div className="buttontext">Play</div>
            </div>
            <div onClick={stopClicked} className={`mybtn ${!runSelected ? "mybtnselected": ""}`}>
                <div className="buttontext">Stop</div>
            </div>
            <div class="form-check">
                <input checked={vimModeChecked} onChange={handleVimModeChange} type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="vimtext" for="exampleCheck1">vim mode</label>
            </div>
            <a href="https://handel-pl.github.io">
                <div className="guide">
                    go to language guide
                </div>
            </a>
        </div>
    )
}