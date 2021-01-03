var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { MyEditor } from './editor.js';
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
            { onClick: saveClicked, className: 'modalitem modalitembottom' },
            'Save'
        )
    );
}

export function Nav(props) {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        showFileModal = _React$useState2[0],
        setShowFileModal = _React$useState2[1];

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
                }, className: 'file ' + (showFileModal && "fileselected") },
            'File',
            React.createElement('i', { className: 'arrow down' }),
            showFileModal && React.createElement(FileModal, null)
        )
    );
}