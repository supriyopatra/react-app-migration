import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody';
import {formatDate} from "../utils/dateFn"
import { useNavigate } from 'react-router-dom';

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
  }
const DataTable = ({columns,data}) => {
    const navigate = useNavigate();
    const onEdit = (productId)=>{

    }

    const onProductDetails = (productId)=>{
        console.log('productId',productId);
        let url = '/product/details?id='+productId
        navigate(url);
    }
   
  return (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          
          
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <TableHeader columns={columns}/>
              <tbody>
                  {
                  data.map((row)=>{
                      return (
                        <TableRow key={row.id} row={row} columns={columns}/>
                          
                     );
                    }
                      )
                  }
              </tbody>
             
          </table>
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
