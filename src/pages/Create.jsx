import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create = () => {

  const navigate = useNavigate()
  const { data, setdata } = useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm()

  const submitHandler = (recipe) => {
    recipe.id = nanoid()
    setdata([...data, recipe]);
    toast.success("New Recipe Created")
    reset();
    navigate("/recipes")
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

            <input
                className='block border-b outline-0 p-2' 
                {...register("chef")}
                type="text" 
                placeholder='Chef Name' 
            />

            <textarea
                className='block border-b outline-0 p-2' 
                {...register("desc")}
                placeholder='Start from here' 
            ></textarea>

            <textarea
                className='block border-b outline-0 p-2' 
                {...register("ingr")}  
                placeholder='Write ingrediants separated by comma' 
            ></textarea>

            <textarea
                className='block border-b outline-0 p-2' 
                {...register("inst")}  
                placeholder='Write instruction separated by comma' 
            ></textarea>

            <select
                className='block border-b outline-0 p-2' 
                {...register("category")}  
            >
                <option className='text-black' value="Breakfast">Breakfast</option>
                <option className='text-black' value="Lunch">Lunch</option>
                <option className='text-black' value="Supper">Supper</option>
                <option className='text-black' value="Dinner">Dinner</option>
            </select>

            <button className="mt-5 block bg-gray-900 cursor-pointer px-4 py-2 rounded">
              Save Recipe
            </button>      
      </form>
  )
}

export default Create
