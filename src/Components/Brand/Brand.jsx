import React from 'react';
import './Brand.scss';

export default function Brand({pollData}) {
    return (
        <div className="brand">
            <img src={pollData.src} alt="logo"/>
            <h2>{pollData.name_fa}</h2>
        </div>
    )
}
