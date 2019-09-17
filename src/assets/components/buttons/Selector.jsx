import React from 'react';

export default ({ title, active, func }) => {
    return (
        active ?
            (<div className="Button-selector">
                <span className="Selector-text-on white">{title}</span>
            </div>)
            :
            (<div className="Selector-text-off Dotted white Pointer" onClick={func}>{title}</div>)
    );
}