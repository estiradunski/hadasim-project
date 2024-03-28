
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './style.css';
import ac from './ac.png';
import { useState } from 'react';

export default function Home_page() {
  const navigate = useNavigate()
  const [image, setImage] = useState(true)
  function ok() {
    setImage(false)
    navigate('/corona_survey')
  }
  return (
    <>{image == true ? (<div className="home_page_container">
      <img className="home_page_background" src={ac} />
      <div className="home_page_text_container">
        <h2 className="home_page_text">For the consensual view of the members of the coffers</h2>
        <h2 className="home_page_text">click here.</h2>
        <button className="home_page_button" onClick={ok}>Click here</button>
      </div>
    </div>) : (<></>)}

    </>
  );
}

