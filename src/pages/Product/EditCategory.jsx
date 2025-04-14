import React, { useEffect, useState } from 'react'
import { addCategory, getSingleCategory, updateCategory } from '../../api/categoryApi'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const EditCategory = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [title,setTitle] = useState('Add Category')

    const [categoryDetails, setCategoryDetails] = useState(null);
    useEffect(()=>{
        console.log(location);
        if(id){
            handleCategoryDetails(id);
            setTitle('Edit Category');
        }
        
    },[])

    const handleCategoryDetails =async (id)=>{
        const res = await getSingleCategory(id);
        setCategoryDetails(res.data);
    }

   

    const handleInput = (e) => {
        const { name, value } = e.target;
        
        setCategoryDetails((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      
      const handleSubmit = async (e)=>{
        try {
            e.preventDefault();
            if(id){
                const res = await updateCategory(id,categoryDetails);
            }else{
                console.log(categoryDetails);
                await addCategory(categoryDetails)
            }
            
            navigate("/product/category");
        } catch (error) {
            console.log(error)
        }
        
      }
  return (
    <>
        <div className='p-5'>
            <h6 class="text-lg font-bold dark:text-white">{title}</h6>
        </div>
        
        <form className='p-5 bg-white' onSubmit={handleSubmit}> 
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="category_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category name</label>
                    <input type="text" name='name' id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" value={categoryDetails?.name} onChange={handleInput} />
                </div>
                <div>
                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Image</label>
                    <input type="text" name='image' id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category Image" value={categoryDetails?.image} onChange={handleInput} />
                </div>
                
                
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </>
    

  )
}

export default EditCategory
