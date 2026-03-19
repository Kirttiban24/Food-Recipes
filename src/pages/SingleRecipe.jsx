import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

const SingleRecipe = () => {
  const {data, setdata} = useContext(recipecontext)
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id)
  const {register, handleSubmit, reset} = useForm({defaultValues: {
    title: recipe.title,
    chef: recipe.chef,
    image: recipe.image,
    inst: recipe.inst,
    desc: recipe.desc,
    ingr: recipe.ingr
  }})

  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id)
    const copydata = [...data]
    copydata[index] = {...copydata[index], ...recipe }
    setdata(copydata);
    toast.success("Recipe Updated")
  }


    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id);
        setdata(filterdata)
        toast.success("Recipe Deleted")
        navigate("/recipes")
    }

  return recipe ? (
  <div className='w-full flex'>
    <div className='left w-1/2 p-2'>
     <h1 className='text-4xl font-black'>{recipe.title}</h1>   
     <img className='h-[40vh] object-cover mt-3 p-3 rounded' src={recipe.image} alt="" />
     <h1>{recipe.chef}</h1>
     <p>{recipe.desc}</p>
    </div>

    <div className='right w-1/2 p-2 overflow-hidden'>
    
        <form className='w-1/2 p-2' onSubmit={handleSubmit(submitHandler)}>
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

            <button className='mt-5 block px-4 py-2 bg-green-900 cursor-pointer rounded outline-0'>
                Update Recipe
            </button>
            <button onClick={DeleteHandler} className='mt-5 block px-4 py-2 bg-red-900 cursor-pointer rounded outline-0'>
                Delete Recipe
            </button>            
        </form>

    </div>

  </div> 
  ) : (
    "Loading..."
  )
}

export default SingleRecipe
