import { ComposePane } from './composepane.js';
import { ControlPane } from './controlpane.js';
import { Nav } from './nav.js';

function App() {
    return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(Nav, null),
        React.createElement(ControlPane, null),
        React.createElement(ComposePane, null)
    );
}

var domContainer = document.querySelector("#app");
ReactDOM.render(React.createElement(App, null), domContainer);