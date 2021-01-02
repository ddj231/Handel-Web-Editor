import {ComposePane} from './composepane.js';
import {ControlPane} from './controlpane.js';
import {Nav} from './nav.js';

function App(){
    return(
        <div className="app">
        <Nav/>
        <ControlPane/>
        <ComposePane/>
        </div>
    )
}

const domContainer =  document.querySelector("#app");
ReactDOM.render(<App />, domContainer);