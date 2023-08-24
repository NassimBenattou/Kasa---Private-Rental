import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import background from '../assets/background_about.png';
import arrow from '../assets/arrow.png';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Apropos() {

  return (
    <div>
      <Navbar />
        <div className='main'>
          <div className="banner">
            <img src={background} alt="" />
          </div>
          <div className='about'>
            <Collapse name="Flexible" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <Collapse name="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse name="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse name="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes." />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Apropos;