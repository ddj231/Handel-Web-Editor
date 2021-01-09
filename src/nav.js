import {MyEditor} from './editor.js';
function FileModal(props){
    function saveClicked(){
        //console.log(MyEditor.getValue());
        let content = MyEditor.getValue();
        let a = document.createElement("a");
        let file = new Blob([content], {type: 'text/plain'});
        a.href = URL.createObjectURL(file);
        a.download = "my-handel-program.txt"
        a.click();
        URL.revokeObjectURL(a.href);
    }

    function exportClicked(){
        const handelCode = MyEditor.getValue();
        Handel.RunHandel(handelCode, {outputMidi: true});
    }

    function newClicked(){
        MyEditor.setValue(`start\n\tplay E4 for 1b\nfinish`);
    }

    return(
        <div className="filemodal">
            <div onClick={newClicked} className="modalitem modalitemtop">New</div>
            <div onClick={saveClicked} className="modalitem modalitemmiddle">Save</div>
            <div onClick={exportClicked} className="modalitem modalitembottom">Export MIDI</div>
        </div>
    )
}

export function Nav(props){
    let [showFileModal, setShowFileModal] = React.useState(false);
    return(
        <div className="handelnav">
            <div className="logo">
                <div className="logotext">
                handel
                </div>
            </div>
            <div onClick={() => {setShowFileModal(!showFileModal)}}className={`file ${showFileModal && "fileselected"}`}>
                File
                <i className="arrow down"></i>
                {showFileModal && <FileModal />}
            </div>
        </div>
    )
}


