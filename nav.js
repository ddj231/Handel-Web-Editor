var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { MyEditor } from './editor.js';
import { Examples } from './examples.js';

function FileModal(props) {
    function saveClicked() {
        //console.log(MyEditor.getValue());
        var content = MyEditor.getValue();
        var a = document.createElement("a");
        var file = new Blob([content], { type: 'text/plain' });
        a.href = URL.createObjectURL(file);
        a.download = "my-handel-program.txt";
        a.click();
        URL.revokeObjectURL(a.href);
    }

    function exportClicked() {
        var handelCode = MyEditor.getValue();
        Handel.RunHandel(handelCode, { outputMidi: true });
    }

    function newClicked() {
        MyEditor.setValue('start\n\tplay E4 for 1b\nfinish');
    }

    return React.createElement(
        'div',
        { className: 'filemodal' },
        React.createElement(
            'div',
            { onClick: newClicked, className: 'modalitem modalitemtop' },
            'New'
        ),
        React.createElement(
            'div',
            { onClick: saveClicked, className: 'modalitem modalitemmiddle' },
            'Save'
        ),
        React.createElement(
            'div',
            { onClick: exportClicked, className: 'modalitem modalitembottom' },
            'Export MIDI'
        )
    );
}

function ExampleModal(props) {
    function genClicked() {
        MyEditor.setValue(Examples.generative);
    }
    function bethClicked() {
        MyEditor.setValue(Examples.beethoven);
    }
    function genSecondClicked() {
        MyEditor.setValue(Examples.generativeSecond);
    }
    return React.createElement(
        'div',
        { className: 'filemodal' },
        React.createElement(
            'div',
            { onClick: genClicked, className: 'modalitem modalitemtop' },
            'Ex. Generative 1'
        ),
        React.createElement(
            'div',
            { onClick: genSecondClicked, className: 'modalitem modalitemmiddle' },
            'Ex. Generative 2'
        ),
        React.createElement(
            'div',
            { onClick: bethClicked, className: 'modalitem modalitembottom' },
            'Ex. Beethoven'
        )
    );
}

export function Nav(props) {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        showFileModal = _React$useState2[0],
        setShowFileModal = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        showExampleModal = _React$useState4[0],
        setShowExampleModal = _React$useState4[1];

    return React.createElement(
        'div',
        { className: 'handelnav' },
        React.createElement(
            'div',
            { className: 'logo' },
            React.createElement(
                'div',
                { className: 'logotext' },
                'handel'
            )
        ),
        React.createElement(
            'div',
            { onClick: function onClick() {
                    setShowFileModal(!showFileModal);
                    setShowExampleModal(false);
                }, className: 'file ' + (showFileModal && "fileselected") },
            'File',
            React.createElement('i', { className: 'arrow down' }),
            showFileModal && React.createElement(FileModal, null)
        ),
        React.createElement(
            'div',
            { onClick: function onClick() {
                    setShowExampleModal(!showExampleModal);
                    setShowFileModal(false);
                },
                className: 'file ' + (showExampleModal && "fileselected") },
            'Load Example',
            React.createElement('i', { className: 'arrow down' }),
            showExampleModal && React.createElement(ExampleModal, null)
        )
    );
}