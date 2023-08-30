import React,  { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import data from '../data/data.json';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Appartement() {

  const [dataId, setDataId] = useState([]);
  const [dataName, setDataName] = useState('');
  const [profilPicture, setProfilPicture] = useState('');
  const [dataEquipements, setDataEquipements] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    try{

      const datas = data.filter(element => element.id.includes(id));
  
      setDataName(datas[0].host.name);
      
      setProfilPicture(datas[0].host.picture);
  
      setDataEquipements(datas[0].equipments);
  
      setDataId(...datas, dataId);
    }
    catch(error){
      console.log(error);
      navigate("/404");
    }


  }, [dataId]);

  return (
    <>
      <Navbar />
        <div className='main'>
          <Slideshow />
          <div className='infos'>
            <div className='title'>
              <h1>{dataId.title}</h1>
              <h2>{dataId.location}</h2>
              <div className='tags'>
                {dataId.tags?.map((tags, index) => (

                  <p key={index}>{tags}</p>
                ))}
              </div>  
            </div>
            <div className="host">
              <div className='name'>
                  <p>{dataName}</p>
                  <img src={profilPicture} />
              </div>
              <div className="rating">

                {Array.from(
                  { length: dataId.rating },
                  (_, i) => (
                    
                    <Rating key={i} fill="#FF6060" />
                    )
                    )
                  }

                {Array.from(
                  { length: 5 },
                  (_, i) => (
                      
                    <Rating key={i} fill="#E3E3E3" />
                    )
                    ).slice(dataId.rating)
                  }
              </div>
            </div>
          </div>
          <div className='desc'>
            <Collapse name="Description" text={dataId.description}  />
            <Collapse name="Équipements" text={dataEquipements} />
          </div>            
        </div>
      <Footer />
    </>
  )
}

export default Appartement;