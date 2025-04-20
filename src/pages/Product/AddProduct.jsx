//import React from 'react';
import React, { useEffect, useState } from 'react'
import { useForm,Controller } from 'react-hook-form';
import Select from "react-select";
import {categoryList} from "../../api/categoryApi";
import { addProduct, productImageUpload } from '../../api/productApi';

const AddProduct = () => {
    const {register,handleSubmit,formState:{errors},control,getValues,setValue,reset,setError} = useForm({defaultValues:{
        "title":"",
        "price":0,
        "description":"",
        "categoryId":null,
        "images":[]
    }});
    const [allCategory, setAllCategorry] = useState([]);
   const [files,setFiles] = useState([])

    useEffect(()=>{
        handleCategoryList();
        register("images",{
            required: 'Please upload at least one image',
          });
    },[]);
    
    const handleCategoryList = async ()=>{
        const response = await categoryList();
        setAllCategorry(response.data);
        console.log(allCategory)
        
    }

    const onSubmit = async(data)=>{
        console.log(getValues());
        await addProduct(data);
        reset();
    }

    const handleFileChange = (e)=>{
        
        Array.from(e.target.files).map((v)=>{
            console.log(v.type.split('/')[0]);
            if(v.type.split('/')[0] != 'image'){
                alert('Please chose only image file')
                return;
            }
        })
       //if()
        setFiles(e.target.files)
    }

    const onUpload = async()=>{
        
        const data = [];
        try {
            
            Array.from(files).map((file)=>{
                const formData = new FormData();
                formData.append('file', file);
                const res = productImageUpload(formData);
                data.push(res)
            })
            
            const res =await Promise.all(data)
            setValue('images',res.map((f)=>f.data.location));
            setError('images','');
            setFiles([])
          } catch (error) {
            console.error('Error uploading file:', error);
          }
        
    }

    const onCategory = (selectOption)=>{
        console.log('selectOption',selectOption);
        setValue('categoryId',selectOption.id);
        
    }

   
   
  return (
    <div className='bg-white p-3 rounded-xl'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="productName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input type="text" id="productName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name"  {...register("title",{required:'Product Name Is Required'})}/>
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </div>
                <div>
                    <label for="productPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="text" id="productPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" {...register("price",{required:'Product Price Is Required'})} />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                </div>
                <div>
                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    {/* <Controller
                            name="category"
                            control={control}
                            rules={{required:'Select One Category'}}
                            render={({field})=>(
                                <Select
                                    {...field}
                                    options={allCategory}
                                    placeholder="Choose a Category"
                                    className="text-sm"
                                    getOptionValue={(option)=>option.id}
                                    getOptionLabel={(option)=>option.name}
                                />
                            )}
                    /> */}
                    <Select
                        options={allCategory}
                        onChange={onCategory}
                        placeholder="Choose a Category"
                        className="text-sm"
                        getOptionValue={(option)=>option.id}
                        getOptionLabel={(option)=>option.name}
                    />
                    {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                </div>  
                
                <div>
                    
                        <label
                        className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="multiple_files"
                        >
                        Upload multiple files
                        </label>

                        <input
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="multiple_files"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        />
                        {errors.images && <p className="text-red-500">{errors.images.message}</p>}
                    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:opacity-50" onClick={onUpload} disabled={!files.length}>Upload</button>
                </div>
                <div>
                    
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." {...register('description',{required:'Product Description Is Required'})}></textarea>
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                </div>
                
            </div>
           
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>


  )
}

export default AddProduct
