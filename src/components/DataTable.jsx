import React, { useEffect, useState } from 'react'
import TableHeader from './TableHeader'
import Pegination from './Pegination';

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
  }
const DataTable = ({columns,data}) => {
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(10); 
  const [offset,setOffset] = useState(0); 
  useEffect(()=>{
    console.log('change page:',page);
    let newOffset = (page-1)*limit;
    console.log(newOffset)
    setOffset(newOffset)
},[page,limit])
  return (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          
          
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <TableHeader columns={columns}/>
              <tbody>
                  {
                  data.slice(offset,limit).map((row)=>{
                      return (
                        <TableRow key={row.id} row={row} columns={columns}/>
                          
                     );
                    }
                      )
                  }
              </tbody>
             
          </table>
          <Pegination totalData={data.length} page={page} setPage={setPage}/>
      </div>
  )
}

const TableRow = ({columns,row})=>{
    return (
        <tr>
            {columns?.map((column)=>{
               
                return <TableCell 
                    key={String(column?.key)}
                    value={getNestedValue(row,column?.key)}
                    render={column?.render}
                    row={row}
                />
            })}
        </tr>
        
    )
}

const TableCell = ({value,render,row})=>{
    return (
        <td class="px-6 py-4">
            {render ? render(value,row) :value}
        </td>
    );
}

export default DataTable
