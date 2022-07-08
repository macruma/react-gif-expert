
import {useState, useEffect} from 'react'
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {//un hooks es nomas una funcion 

     const [images, setImages]=useState([]);  
     const [isLoading, setIsLoading]=useState(true); 


     const getImages=async()=>{//esto es para traer las imagenes.
         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading(false)         
     }  
     useEffect(()=>{//esto hace que cada vez que le de enter al input funcione esta funmsion y no se repita.
         getImages();
     },[])
     
    return{
        images,
        isLoading
    }
}
