import React from 'react';
import data from '../data/data.json';
import { useNavigate } from 'react-router-dom';

function Card(props) {

    const navigate = useNavigate();

    const getId = (e) => {

        e.preventDefault();

        props.handleCallback(e.target.id);
    }

    const redirect = (e) => {

        e.preventDefault();

        navigate(`/appartement/${e.target.id}`);
    }

    return (
        <>  
            {data.map(({ title, id, cover }) => (   
                <div onClick={getId} key={id} className='location'>
                    <img onClick={redirect} id={id} src={cover} />
                    <h3>{title}</h3>
                </div>
            ))}
        </>
    )
}

export default Card