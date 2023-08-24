import React, { useState } from 'react';

function Card(props) {

    return (
        <>     
            <div key={props.id} className='location'>
                <img src={props.cover} />
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default Card