import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faGripVertical } from '@fortawesome/free-solid-svg-icons';

const SelectedItem = ({itemData,onRemove}) => {
  return (
    <div className='flex bg-teal-100 justify-between p-1 rounded-sm text-center' draggable="true">
        <div className='flex'>
            <span className="cursor-move text-gray-500 hover:text-gray-700 px-2">
                    <FontAwesomeIcon icon={faGripVertical} />
            </span>
            <p className='text-xs text-center text-gray-500 font-medium p-1'>{itemData.Alias}</p>
        </div>
            
            <a href="#" onClick={(e)=>onRemove(itemData)}><FontAwesomeIcon icon={faTrash} className='me-1' /></a>
    </div>
  )
}

export default SelectedItem
