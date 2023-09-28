'use client'
import React, { useState } from 'react'
import axios from 'axios'
const About = () => {
  const loaderShow = () =>{
    const customLoader = document.getElementById('');
  }
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(null)
  const getImages = async ()=>{
    setLoader('Fetching');
    try {
      const response = await axios.get('https://picsum.photos/v2/list');
      setImages(response.data);
      setLoader('images Fetched');
      console.log(images)
      
    } catch (error) {
      console.error("Fetching Problem");
      setLoader('images fetching problem');
    }
  }
  return (
    <div className='container mx-auto'>
      <button onClick={getImages} className='rounded-full bg-green-600 px-5 py-3 text-white my-3'>Load Images</button>
      <div className='m-2'>
        <h1>{loader}</h1>
        {images.map((image, i)=>{
          return <img className='m-2 inline-block' width="200" height="200" key={i} src={image.download_url} />
        })}
      </div>
    </div>
  )
}

export default About