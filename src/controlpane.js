import {MyEditor, myConsoleDiv} from './editor.js';
import './codemirror-5.59.1/keymap/vim.js' 

export function ControlPane(props){
    let [runSelected, setRunSelected] = React.useState(false);
    let [runCount, setRunCount] = React.useState(0);
    let [vimModeChecked, setVimModeChecked] = React.useState(false);

    function playClicked(){
        if(!runSelected){
            const handelCode = MyEditor.getValue();
            let voiceinst = Handel.MakeInstrument({
                A3: './assets/Do-A3.wav',
                A2: './assets/Do-A2.wav'
            })
            let config = {
                instruments: {
                    voice: voiceinst
                }
            };
            Handel.RunHandel(handelCode, config)
            .then(()=> {
                let textnode = document.createElement("div");
                myConsoleDiv.appendChild(textnode);
            }).catch((ex) => {
                let textnode = document.createElement("div");
                textnode.innerText = ex;
                myConsoleDiv.appendChild(textnode);
            });
            setRunSelected(true);
        }
    }

    function stopClicked(){
        if(runSelected){
            Handel.StopHandel();
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
            <a href="https://ddj231.github.io/Handel-Documentation/docs/">
                <div className="guide">
                    go to language guide
                </div>
            </a>
        </div>
    )
}