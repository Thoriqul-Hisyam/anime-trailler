import React,{useEffect,useState,Component} from "react";
import axios from 'axios';
import Slider from './SliderComponent'
import '../App.css';
function Discover ({animes}) {
    const [images, setImage] = useState([])

    useEffect(() =>{
        const getImageAnime = async () => {
            await axios.get(`https://api.jikan.moe/v4/anime/`).then(function(response){
                const imageAnimes = response.data
                // console.log(imageAnimes)
                setImage(imageAnimes.data)
                // console.log(images)
               
            })
        }
        getImageAnime()
    },[])
   
    return(
            
        <div className="container-fluid">
            {/* Top Anime */}
            <div className="hidden md:relative md:block">
                       <div className="gradient-radial-1  -top-56 -right-36    w-96 h-96   absolute rounded-full blur-3xl -z-10"></div>
                       <div className="gradient-radial-1   -left-16  w-96 h-96   absolute rounded-full blur-3xl -z-10"></div>
                </div>
                <div className="relative sm:hidden">
                       <div className="gradient-radial-1  bottom-0 -right-48    w-96 h-64   absolute rounded-full blur-3xl -z-10"></div>
                       <div className="gradient-radial-1  -bottom-42 -left-16  w-64 h-64   absolute rounded-full blur-3xl -z-10"></div>
                </div>
            <div className="flex justify-between text-white mt-8 px-5">
                <h2 className="text-2xl font-bold">Top Animes this Year</h2>
                <a href="" className="underline underline-offset-2 mt-3">see all</a>
            </div>
            <Slider/>
            <div className="text-white">
        
      </div>
        {/* List Anime */}
            <div className="flex justify-between text-white mt-8 px-5 z-">
                <h2 className="text-2xl font-bold">List Animes</h2>
            </div>
            <div className="hidden md:relative md:block">
                       <div className="gradient-radial-1  top-64 -right-48    w-96 h-64   absolute rounded-full blur-3xl -z-10"></div>
                       <div className="gradient-radial-1  -bottom-96 -left-16  w-64 h-64   absolute rounded-full blur-3xl -z-10"></div>
                </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 my-4 px-4 ">
                {images.map(image=>{
                    return(
                        
                        <div className="grid grid-cols-2 ">
                        <a href={image.url} alt={image.title}>
                            <img src={image.images.jpg.image_url} className="my-4 h-36 w-24 sm:h-48 sm:w-36 xl:h-60 xl:w-48 " key={image.mal_id}/>
                        </a>
                        
                        <div className="flex items-center justify-center">
                            <div className="grid grid-cols-1">        
                                    <h4 className="text-white font-bold px-3 text-mobile text-left ">{image.title}</h4>
                                    <div className="desc grid grid-rows-1 gap-y-1 md:gap-y-1  pl-3 text-left ">
                                            <p className="text-slate-400 text-eps ">Eps: {image.episodes} - {image.duration}</p>
                                            <p className="text-slate-400 text-eps w-16 md:w-full ">Status: {image.status} - {image.duration}</p>
                                            <div className="grid grid-cols-2 text-white  md:w-full">
                                                <div className="rate flex items-center ">
                                                    <span className="inline-block align-middle pr-1">
                                                        <img src="asset/star.png" className="w-2 h-2 md:w-4 md:h-4"/>
                                                    </span>
                                                    <p className="text-white text-eps">{image.score}</p>
                                                </div>
                                                <p className="rating flex md:justify-center items-center text-eps">{image.type}</p>
                                        </div>
                                    </div>
                                
                            </div>
                            <div className="relative h-full">
                                <div className="gradient-radial-1  right-64  w-64 h-64  sm:hidden absolute rounded-full blur-3xl -z-10"></div>
                                <div className="gradient-radial-1  -right-72 w-64 h-64  sm:hidden absolute rounded-full blur-3xl -z-10"></div>
                            </div>
                        </div>
                        
                        </div>
                        )
                    })}
            </div>
                 <div className="hidden md:relative md:block ">
                       <div className="gradient-radial-1  -top-64 -right-48    w-96 h-64   absolute rounded-full blur-3xl -z-10"></div>
                       <div className="gradient-radial-1  bottom-96 -left-16  w-64 h-64   absolute rounded-full blur-3xl -z-10"></div>
                </div>
        </div>
      )
    
    }

export default Discover ;
