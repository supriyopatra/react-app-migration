import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";


const Item = ({itemData,onAdd}) => {
  return (
    <div className='flex bg-teal-100 justify-between p-1 rounded-sm text-center'>
        <p className='text-xs text-center text-gray-500 font-medium p-1'>{itemData.Alias}</p>
        {itemData.IsAvailable ?<button className='bg-teal-600 p-2 text-xs text-white rounded-sm cursor-pointer items-center text-center' onClick={(e)=>onAdd(itemData)} ><FontAwesomeIcon icon={faSquarePlus} className='me-1'  />Add</button> :
        <span className='text-xs font-bold text-teal-700 p-2'>Added</span>}
    </div>
  )
}

export default Item
