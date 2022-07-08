
import {useState} from 'react';
import {AddCategory,GifGrid} from './components';

export const GifExpertApp = () => {
      
      const [categories, setCategories] = useState(['One Punch']);//esto es para mostrarnos las categorias que quiero

      console.log(categories);

      const onAddcategory =(newCategory)=>{

        if (categories.includes(newCategory))return//esto es para no tener el mismo nombre en el listado
        // console.log(newCategory);
         setCategories([newCategory,...categories]);//esto nos guarda las categorias anteriores y agrega las otras despues 

      }


    return (
      <>
          {/*titulo*/}
          <h1>GifExpertApp</h1>

          {/*Input*/}
          <AddCategory
             //setCategories={setCategories}
             onNewCategory={onAddcategory}
             />

          {/*listado de gif*/}
          {/*<button onClick={onAddcategory}>Agregar</button>*/}
         
            {
                categories.map((category) =>( //*el amp es para mostrar la categoria y como listado key es obligatorio*/ 
                    <GifGrid 
                       key={category}
                       category={category}
                    />
                ))  
            }          
      
            {/*gif Item*/}
       </>
      )

    }
