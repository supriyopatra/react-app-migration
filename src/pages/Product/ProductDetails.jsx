import React, { useEffect, useState } from 'react';
import {singleProduct} from '../../api/productApi'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
    const [index, setIndex] = useState(0);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const navigate = useNavigate()
    useEffect(()=>{
        getProductDetails(id);
    },[]);
    const getProductDetails = async (id)=>{
        const res = await singleProduct(id);
        console.log(res.data);
        setProductDetails(res.data);
    }

    const changeThabnail = (i)=>{
        setIndex(i)
    }

    const onBack = ()=>{
        navigate(-1)
    }
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* productDetails Image Gallery */}
        <div className="space-y-4">
          <img
            src={productDetails?.images?.[index]}
            alt={productDetails.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <div className="flex gap-3">
            {productDetails.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                className="w-24 h-24 object-cover rounded-lg border"
                onClick={(e)=>changeThabnail(i)}
              />
            ))}
          </div>
        </div>

        {/* productDetails Details */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{productDetails.title}</h2>
          <p className="text-sm text-gray-500">Category: {productDetails?.category?.name}</p>
          <p className="text-2xl text-blue-600 font-semibold">${productDetails.price}</p>
          <p className="text-gray-700">{productDetails.description}</p>

          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={(e)=>onBack()}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
