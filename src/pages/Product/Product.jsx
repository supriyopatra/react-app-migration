import React, { useEffect, useState } from 'react'
import { productList } from '../../api/productApi'
import { useNavigate,Link } from 'react-router-dom';
import DataTable from '../../components/DataTable';
const columns = [
    {
        key:'id',
        header: 'ID'
    },
    {
        key:'title',
        header: 'Product Name',
        render:(value,row)=>{
            return (<Link  class="font-medium text-gray-600 dark:text-blue-500 hover:underline cursor-pointer" to={`/product/details?id=${row.id}`} >{value}</Link>)
        }
    },
    
    {
        key:`category.name`,
        header: 'Category Name'
    },
    {
        key:'price',
        header: 'Price'
    },
    {
        key:'creationAt',
        header: 'Created At'
    },
    {
        key:'updatedAt',
        header: 'Updated At'
    },
    {
        key:'edit',
        header: 'Edit',
        render:(value,row)=>{
            return (<Link  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit</Link>)
        }
    }

];
const Product = () => {
    const [allProduct, setAllProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        onFetchProduct();
    },[])

    const onAddProducty = ()=>{
        navigate('/product/add')
    };

    const onFetchProduct = async ()=>{
        const res =  await productList();
        console.log(res.data);
        setAllProduct([...res.data]);
    }

    

   
  return (
    <>
      <div className='p-5 flex justify-between'>
            <h6 class="text-lg font-bold dark:text-white">Product List</h6>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={onAddProducty}>Add Product</button>
      </div>
     <DataTable data={allProduct} columns={columns}/>
    </>
  )
}

export default Product
