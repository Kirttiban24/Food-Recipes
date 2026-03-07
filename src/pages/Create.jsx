import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { recipecontext } from '../context/RecipeContext';
import { nanoid } from 'nanoid'
const Create = () => {

  const {data, setdata} = useContext(recipecontext)
  const {register, handleSubmit, reset} = useForm()

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe])
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className='block border-b outline-0 p-2' 
        {...register("image")} 
        type="url"
        placeholder='Enter Image Url'  
      />
      <small className='text-red-500'>
        This is an Error
      </small>
      
      <input
        className='block border-b outline-0 p-2' 
        {...register("title")} 
        type="text" 
        placeholder='Recipe Title' 
      />


      <textarea
        className='block border-b outline-0 p-2' 
        {...register("description")}  
        placeholder='Start from here' 
      ></textarea>

      <textarea
        className='block border-b outline-0 p-2' 
        {...register("ingrediants")}  
        placeholder='Write ingrediants separated by comma' 
      ></textarea>


      <textarea
        className='block border-b outline-0 p-2' 
        {...register("instructions")}  
        placeholder='Write instruction separated by comma' 
      ></textarea>

      <select
        className='block border-b outline-0 p-2' 
        {...register("category")}  
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className='mt-5 block px-4 py-2 bg-gray-900 cursor-pointer rounded outline-0'>Save Recipe</button>
    </form>
  )
}

export default Create
