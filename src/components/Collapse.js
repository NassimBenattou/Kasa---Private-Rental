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
            <div className='collapse'>
                <div onClick={handleOpen} className='dropdown'>
                    <p>{props.name}</p>
                    <img style={{animation: toggle ? "rotation .5s linear" : "reverse .5s linear", transform: toggle && "rotate(180deg)"}} src={arrow} alt="vector" />
                </div>
                <div style={{ maxHeight: !toggle ? "0px" : '400px' }} className='hideDiv'>
                    <p style={{ opacity: !toggle ? "0" : "1", marginTop: toggle && "20px", fontSize: !toggle && "0" }}>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default Collapse;