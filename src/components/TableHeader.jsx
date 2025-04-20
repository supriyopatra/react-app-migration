import React from 'react'

const TableHeader = ({columns}) => {
  return (
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            {
                columns.map((column)=>{
                    return (<th scope="col" class="px-6 py-3">
                        {column.header}
                    </th>);
                })
            }
            
            
        </tr>
    </thead>
  )
}

export default TableHeader
