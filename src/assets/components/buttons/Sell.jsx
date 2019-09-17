import React from 'react';
import plrStr from '../../services/Plurals';

export default ({ title, img, qty, value, func, active }) => {
    return (
        <div className="Button-container">
            <div className="Section-container">
                <img src={img} alt="" />
                <span className={(qty > 0) ? "Button-sell-qty white" : "Button-sell-qty red"}>× {qty}</span>
            </div>
            <button className="Button-store Button-sell Pointer" onClick={func} disabled={!active}>
                <span className="Button-text white">Продать {title}</span>
            </button>
            <p className="Button-undertext white">за {plrStr(value, 'гривна', 'гривны', 'гривен')}</p>
        </div>
    );
}