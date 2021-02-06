var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { MyEditor } from './editor.js';
import './codemirror-5.59.1/keymap/vim.js';

export function ControlPane(props) {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        runSelected = _React$useState2[0],
        setRunSelected = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        runCount = _React$useState4[0],
        setRunCount = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        vimModeChecked = _React$useState6[0],
        setVimModeChecked = _React$useState6[1];

    function playClicked() {
        if (!runSelected) {
            var handelCode = MyEditor.getValue();
            var voiceinst = Handel.MakeInstrument({
                A3: './assets/Do-A3.wav',
                A2: './assets/Do-A2.wav'
            });
            var config = {
                instruments: {
                    voice: voiceinst
                }
            };
            Handel.RunHandel(handelCode, config);
            setRunSelected(true);
        }
    }

    function stopClicked() {
        if (runSelected) {
            Handel.StopHandel();
            setRunSelected(false);
        }
    }

    function handleVimModeChange() {
        if (vimModeChecked) {
            MyEditor.setOption("keyMap", "default");
        } else {
            MyEditor.setOption("keyMap", "vim");
        }
        setVimModeChecked(!vimModeChecked);
    }

    return React.createElement(
        'div',
        { className: 'controlpane' },
        React.createElement(
            'div',
            { onClick: playClicked, className: 'mybtn ' + (runSelected ? "mybtnselected" : "") },
            React.createElement(
                'div',
                { className: 'buttontext' },
                'Play'
            )
        ),
        React.createElement(
            'div',
            { onClick: stopClicked, className: 'mybtn ' + (!runSelected ? "mybtnselected" : "") },
            React.createElement(
                'div',
                { className: 'buttontext' },
                'Stop'
            )
        ),
        React.createElement(
            'div',
            { 'class': 'form-check' },
            React.createElement('input', { checked: vimModeChecked, onChange: handleVimModeChange, type: 'checkbox', 'class': 'form-check-input', id: 'exampleCheck1' }),
            React.createElement(
                'label',
                { 'class': 'vimtext', 'for': 'exampleCheck1' },
                'vim mode'
            )
        ),
        React.createElement(
            'a',
            { href: 'https://ddj231.github.io/Handel-Documentation/docs/' },
            React.createElement(
                'div',
                { className: 'guide' },
                'go to language guide'
            )
        )
    );
}