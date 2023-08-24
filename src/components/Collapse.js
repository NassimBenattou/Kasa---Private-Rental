import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Collapse(props) {

    const [toggle, setToggle] = useState(false);

    const handleOpen = () => {

        setToggle(!toggle);
    }

    return (
        <>
            <div onClick={handleOpen} className='dropdown'>
                <p>{props.name}</p>
                <img style={{animation: toggle ? "rotation .5s linear" : "reverse .5s linear", transform: toggle && "rotate(180deg)"}} src={arrow} alt="vector" />
            </div>
            <div style={{maxHeight : !toggle ? "0" : "400px", transition: toggle && "max-height .5s"}} className='hideDiv'>
                <p style={{opacity: !toggle ? "0" : "1", transition: toggle ? "margin-top .5s" : "margin-top .5s", marginTop: toggle && "20px", fontSize: !toggle && "0" }}>{props.text}</p>
            </div>
        </>
    )
}

export default Collapse;