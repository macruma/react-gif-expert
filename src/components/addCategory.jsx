import { useState } from "react"


export const AddCategory=({onNewCategory})=>{

    const [inputvalue, setInputvalue] = useState('');

    const onInputChange=({target})=>{//target.value es para mostrar el nombre del input que ponemos
        setInputvalue(target.value)//esto es para poder escribir en el input
    }

    const onSubmit= ( event )=>{
        event.preventDefault();
        if (inputvalue.trim().length<=1)return;//esto es para que no pueda escribir solo un letra sino mas de dos
        //console.log(inputvalue);
        //setCategories(categories=>[inputvalue, ...categories]);
        onNewCategory(inputvalue.trim());
        setInputvalue(''); //esto es para mostar vacia la caja cuando le demos enter

    }

    return(
        <form onSubmit={ onSubmit}>
        <input 
             type="text" 
             placeholder="buscar gifs"
             value={inputvalue}
             onChange={onInputChange}
        />
        </form>
    )
}