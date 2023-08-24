import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Banner from '../components/Banner';
import data from '../data/data.json';
import background from '../assets/background_main.png';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Accueil() {

  return (
    <div>
      <Navbar />
        <div className='main'>
          <Banner background={background} title="Chez vous, partout et ailleurs" />
          <div className='list'>
            {data.map(({ title, id, cover }) => (
              
              <Card id={id} title={title} cover={cover} />
            ))}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Accueil;