import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Error() {

  const link = useNavigate();

  return (
    <>
      <Navbar />
        <div className='main'>
          <div className='error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a onClick={() => link("/")}>Retourner sur la page d’accueil</a>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Error