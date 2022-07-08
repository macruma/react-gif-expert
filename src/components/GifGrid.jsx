
import { Gifltem } from './Gifltem';
import {useFetchGifs} from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const {images,isLoading}= useFetchGifs(category);


  return (
     <>
       <h3>{category}</h3>
       {
          isLoading
          ?(<h2>Cargando....</h2>)
          :null
       }
       <div className='card-grid'>
        {
            images.map((image)=>(//esto es para llamar las imagenes y se muestre el nombre

                  < Gifltem 
                    key={image.id}
                    {...image}//esto es para mostrar los props

                  />

            ))
        }     
       </div>  
     
     </>
  )
}
