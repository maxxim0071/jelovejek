import React from 'react';
import plrStr from '../services/Plurals';

import grivna from '../images/grivna.png'

export default ({ qty, add }) => {
    let cash = [];
    for (let i = 0; i < qty; i++) {
        cash.push(<img key={i} className="Grivna" src={grivna} alt="grivna" />)
    }
    return (
        <div>
            <div className="Grivna-box">{cash}</div>
            <p className="Grivna-undertext white">{plrStr(qty, 'гривна', 'гривны', 'гривен')}</p>
            <p className="Grivna-undertext Dotted white Pointer" onClick={add}>Добавить одну монету</p>
        </div>
    );
}