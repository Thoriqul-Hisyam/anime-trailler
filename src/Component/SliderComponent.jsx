import { useState,useEffect } from 'react';
import Slider from 'react-slick';
// import axios from 'axios';
import '../App.css';


function EmptyArrow({onClick}) {
  return (
    <div></div>
  );
}

function App() {

  const [carousel, setCarousel] = useState([]);

  useEffect(() =>{
    // const getCarousel = async () => {
    //     await axios.get(`https://api.jikan.moe/v4/anime/`).then(function(response){
            
    //         const carousels = response.data
    //         // console.log(Carousels)
    //         setCarousel(carousels.data)
    //         // console.log(images)
           
    //     })
    // }
    const getCarousel =  async() =>{
      const anime = await fetch('https://api.jikan.moe/v4/anime')
      const value = await anime.json()
      console.log(value)
      setCarousel(value.data)
    }
    getCarousel()
},[])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    
    
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        }
      }]
  };

  return (
    <div className="container-fluid mt-2">
      
        <div className="slider xl:px-16 md:px-8 px-4">
      <Slider {...settings}>
          {
            carousel.map((carousel=>{
                return(
              <div className="xl:px-8 px-2 ">
                <img src={carousel.images.jpg.large_image_url} alt="" className=' h-28 md:h-64 xl:w-64 xl:h-64' />
              </div>
                )
            }))
          }
      </Slider>
        </div>
    </div>
  );
}

export default App;