import React,  { useEffect, useState } from 'react';
import arrowBack from '../assets/arrow_back.png';
import arrowRight from '../assets/arrow_right.png';
import data from '../data/data.json';
import '../sass/Main.scss';
import '../sass/Responsive.scss';

function Slideshow() {

    const [dataPictures, setDataPictures] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        
        setDataPictures(data[0].pictures);
    });

    const nextPicture = (e) => {

        e.preventDefault();
    
        if(index < dataPictures.length){
    
          setIndex(index +1);
        }
    
        if(index === dataPictures.length -1){
    
          setIndex(0);
        }
      }
    
      const lastPicture = (e) => {
    
        e.preventDefault();
    
        setIndex(index-1);
    
        if(index === 0){
    
          setIndex(dataPictures.length -1)
        }
      }

    return (
        <>
            <div className='carousel'>
                {dataPictures.length > 1 && 
                    <>
                    <img onClick={lastPicture} id="arrowBack" src={arrowBack} />
                    <img onClick={nextPicture} id="arrowRight" src={arrowRight} />
                    </>
                }
                    <img id="cover" src={dataPictures[index]}/>
            </div>
        </>
    )
}

export default Slideshow;