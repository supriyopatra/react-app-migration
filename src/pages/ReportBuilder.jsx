import React, { useEffect, useState } from 'react'
import Item from '../components/Item';
import SelectedItem from '../components/SelectedItem';
import MetricData from '../assets/metricdata.json'

const ReportBuilder = () => {
    const [mData,setMData] = useState(MetricData);
    const onAdd = (itemData) => {
        console.log(itemData);
    
        const lastItem = [...mData]
            .sort((a, b) => b.DisplayOrder - a.DisplayOrder)[0];
    
        const newMdata = mData.map((it) => {
            if (it.ColumnID === itemData.ColumnID) {
                it.IsAvailable = false;
                it.DisplayOrder = lastItem.DisplayOrder + 1;
                console.log('it', it);
            }
            return it;
        });
    
        console.log(newMdata);
        setMData([...newMdata]);
    };

    const onAddAll = ()=>{
        let lastItem = [...mData]
            .sort((a, b) => b.DisplayOrder - a.DisplayOrder)[0]['DisplayOrder'];

        const newMdata = mData
        .map(v=>{
                if(v.IsAvailable){
                    v.IsAvailable = false;
                    v.DisplayOrder = ++lastItem
                }
            return v;  
        });
        console.log(newMdata)

            setMData([...newMdata]);
    }

    const onRemove = (itemData)=>{
        const index = mData.findIndex(v=>v.ColumnID === itemData.ColumnID);
        mData[index].IsAvailable = true;
        mData[index].DisplayOrder = 0;
        let firstItem = 0;
        mData
        .filter(v=>!v.IsAvailable)
        .sort((a,b)=>{
            a.DisplayOrder-b.DisplayOrder
        }).map((v)=>{v.DisplayOrder=++firstItem});
         console.log(mData);
         setMData([...mData]);
    }
    
    const onRemoveAll = ()=>{
        const newMdata = mData.filter((v)=>!v.IsAvailable).map((v)=>{
             v.IsAvailable = false;
             v.DisplayOrder = 0;
             return v;
        });

        setMData([...newMdata]);
    }
   
  return (
    <div className='grid grid-cols-1 gap-5'>
        <div className='grid grid-cols-1 gap-2 bg-white p-5 shadow-lg'>
            <div className="grid grid-cols-4 gap-2">
                <label htmlFor="reportBuilderName" className=''>Name:</label>
                <input 
                    type="text" 
                    id="reportBuilderName" 
                    className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-2" 
                    placeholder="Report Name" 
                    
                    />
            </div>
            <div className="grid grid-cols-4 gap-2">
                <label htmlFor="reportBuilderName" className=''>Report Type:</label>
                <input 
                    type="text" 
                    id="reportBuilderName" 
                    className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-2" 
                    placeholder="Report Type" 
                    
                    />
            </div>
            <div className="grid grid-cols-4 gap-2">
                <label htmlFor="reportBuilderName" className=''>Metric Currency Display :</label>
                <input 
                    type="text" 
                    id="reportBuilderName" 
                    className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-2" 
                    placeholder="Metric Currency Display" 
                    
                    />
            </div>
        </div>
        <div className=''>  
           
            <div className='bg-teal-600 text-white p-2'>
                <h2 className='uppercase text-sm font-bold'>Metrics</h2>
            </div>
            <div className='bg-white p-2 grid grid-cols-2 gap-5'>
                <div className='flex justify-between'>
                    <p className="uppercase text-xs text-gray-500 font-bold">Available Dimensions</p>
                    <a href="#" className="text-xs font-bold text-teal-600" onClick={onAddAll}>Add All</a>
                </div>
                <div className='flex justify-between'>
                    <p className="uppercase text-xs text-gray-500 font-bold">SELECTED DIMENSIONS</p>
                    <p className="text-xs text-red-500 font-bold" onClick={onRemoveAll}>Remove All</p>
                </div>

            </div>
            <div className='bg-white p-2 grid grid-cols-2'>
                {/* Availavle Dimension */}
                <div className='availavleDimension bg-gray-100'>
                    <div className='searchBox p-1 shadow-xs'>
                        <input 
                        type="text" 
                        id="reportBuilderName" 
                        className="bg-gray-50   text-gray-700 text-sm rounded-lg  block w-full p-2.5 col-span-2 outline-0 border-0" 
                        placeholder="Search Dimension" 
                        
                        />
                    </div>
                    <div className='h-64  overflow-y-scroll flex flex-col gap-1.5 p-2'>
                        {
                            mData.map((item)=>{
                                return  <Item itemData={item} onAdd={onAdd} key={item.ColumnID}/>
                            })
                        }
                       
                        
                    </div>
                </div>
                {/* selected Dimension */}
                <div className='h-80 bg-gray-100 overflow-y-scroll flex flex-col gap-1.5 p-2' >
                    {
                                mData.filter(v=>!v.IsAvailable).sort((a,b)=>a.DisplayOrder-b.DisplayOrder).map((item)=>{
                                    return  <SelectedItem itemData={item} onRemove={onRemove}/>
                                })
                    }
                        
                </div>
                

            </div>
        </div>
    </div>
    

  )
}

export default ReportBuilder
