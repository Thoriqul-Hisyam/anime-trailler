import React,{useEffect,useState} from "react";
import axios from 'axios';
import Slider from 'react-slick';
import { getValue } from "@testing-library/user-event/dist/utils";
import cors from 'cors';    
function Discover(){
    const [images, setImage] = useState([])
    const [animes, setAnime] = useState([])
    const [id, setId] = useState([])

    useEffect(() =>{
        const getImageAnime = async () => {
            await axios.get(`https://api.jikan.moe/v4/anime/`).then(function(response){
                const imageAnimes = response.data
                console.log(imageAnimes)
                setImage(imageAnimes.data)
                console.log(images)
            })
        }
        getImageAnime()
        // getAnime()
    },[])
    
    const carousel ={
        infinite:true,
        lazyLoad:true,
        speed:300,
        slideToShow:3,
        centerMode:true,
        centerPadding:0,
    }
   
    return(
            
        <div className="container-fluid">
            {/* Top Anime */}
            <div className="flex justify-between text-white mt-20 px-5">
                <h2 className="text-2xl font-bold">Top Movies this Year</h2>
                <a href="" className="underline underline-offset-2 mt-3">see all</a>
            </div>
            {/* List Anime */}
            <div className="flex justify-between text-white mt-20 px-5">
                <h2 className="text-2xl font-bold">List Anime</h2>
            </div>
            <div className="grid grid-cols-3 mx-8 justify-center">

                {images.map(image=>{
                    return(
                        <img src={image.images.jpg.image_url} className="p-3" ></img>
                        // <p className="text-white">{anime.mal_id}</p>
                        )
                    })}
            </div>
            {/* https://placeimg.com/250/180/arch */}
            {/* <Slider>
                {datas.map(data =>{
                    return(
                        <div>
                            <img src={data.images.jpg.small_image_url} className="w-8"/>
                        
                        </div>
                    )
                })}    
            </Slider>    */}
        </div>
      )
    
    }

export default Discover;

