import React from 'react';
import '../sass/Main.scss';
import '../sass/Responsive.scss';
import background from '../assets/background_main.png';
import data from '../data/data.json';
import { useState, useEffect } from 'react';

function MainAccueil() {

  const [dataLocation, setDataLocation] = useState(data);

  useEffect(() => {

    console.log(dataLocation)

  })


  return (
    <div className='main'>
        <div className="banner">
          <img src={background} alt="" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className='list'>
          {dataLocation.map(({ title, id, cover }) => (
    
            <div key={id} className='location'>
                <img src={cover} />
                <h3>{title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MainAccueil