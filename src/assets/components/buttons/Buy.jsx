import React from 'react';
import plrStr from '../../services/Plurals';

export default ({ title, value, func, active }) => {
    return (
        <div className="Button-container">
            <button className="Button-store Button-buy Pointer" onClick={func} disabled={!active}>
                <span className="Button-text white">{title}</span>
            </button>
            <p className="Button-undertext white">за {plrStr(value, 'гривна', 'гривны', 'гривен')}</p>
        </div>
    );
}