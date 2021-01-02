import { RunControls } from './runcontrols.js';
import { Guide } from './guide.js';

export function ComposePane(props) {
    return React.createElement(
        'div',
        { className: 'contaniner' },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement('div', { className: 'col-6' })
        )
    );
}