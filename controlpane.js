var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { MyEditor } from './editor.js';
export function ControlPane(props) {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        runSelected = _React$useState2[0],
        setRunSelected = _React$useState2[1];

    function playClicked() {
        if (!runSelected) {
            //TODO: run handel program
            var handelCode = MyEditor.getValue();
            RunHandel(handelCode);
            setRunSelected(true);
        }
    }

    function stopClicked() {
        if (runSelected) {
            //TODO: stop handel program
            StopHandel();
            setRunSelected(false);
        }
    }

    return React.createElement(
        "div",
        { className: "controlpane" },
        React.createElement(
            "div",
            { onClick: playClicked, className: "mybtn " + (runSelected ? "mybtnselected" : "") },
            React.createElement(
                "div",
                { className: "buttontext" },
                "Play"
            )
        ),
        React.createElement(
            "div",
            { onClick: stopClicked, className: "mybtn " + (!runSelected ? "mybtnselected" : "") },
            React.createElement(
                "div",
                { className: "buttontext" },
                "Stop"
            )
        )
    );
}