import React from 'react';
import './Pestañas';

const Click = (props) => {
    const { tab, setBoxMessage, botonNav } = props;
    const { id } = tab;
    const handleClick = (e)=>{ 
        setBoxMessage(botonNav[e.target.id].message)
    }
    return (
            <div id={ id } name={ id } className="tab" onClick={(e) => handleClick(e)}>
                Tab { id+1 }
            </div>
    )
}

export default Click
