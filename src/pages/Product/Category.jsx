import React, { useEffect, useState } from 'react'
import { categoryList } from '../../api/categoryApi';
import {formatDate} from './../../utils/dateFn'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [allCategory, setAllCategorry] = useState([]);
  useEffect(()=>{
    handleCategoryList();
    
  },[]);
  const navigate = useNavigate()
  const handleCategoryList = async ()=>{
    const response = await categoryList();
    setAllCategorry(response.data);
    console.log(allCategory)
    
  }

  const onEdit =(id)=>{
    navigate(`/product/edit/${id}`);
  }

  const onAddCategory = ()=>{
    navigate(`/product/add`);
  }
  return (
    
<>
  

<div className='p-5 flex justify-between'>
      <h6 class="text-lg font-bold dark:text-white">Category List</h6>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={onAddCategory}>Add Category</button>
</div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
    
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Category name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Image URL
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Created At
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Updated At
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Edit
                      {/* <span class="sr-only">Edit</span> */}
                  </th>
              </tr>
          </thead>
          <tbody>
          {allCategory.map((v)=>{
            return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={v.id}>
                  
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {v.name}
                  </th>
                  <td class="px-6 py-4">
                      {v.image}
                  </td>
                  <td class="px-6 py-4">
                      {formatDate(v.creationAt)}
                  </td>
                  <td class="px-6 py-4">
                  {formatDate(v.updatedAt)}
                  </td>
                  <td class="px-6 py-4 text-right">
                      <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={(e)=>onEdit(v.id)}>Edit</a>
                  </td>
              </tr>)}
            )}
              
              
          </tbody>
      </table>
  </div>
</>


  )
}

export default Category
