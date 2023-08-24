import React from 'react';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Banner(props) {

    return (
        <>
            <div className="banner">
                <img src={props.background} alt="" />
                <h1>{props.title}</h1>
          </div>
        </>
    )
}

export default Banner;