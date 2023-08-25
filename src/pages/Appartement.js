import React,  { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data/data.json';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Appartement() {

  const { id } = useParams();

  useEffect(() => {

    console.log(id);
    
    const datas = data.filter(element => element.id.includes(id))
    console.log(datas)

  });

  return (
    <>
      <Navbar />
        <div className='main'>
          
        </div>
      <Footer />
    </>
  )
}

export default Appartement;