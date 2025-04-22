import React from 'react'

const PageCell =({page,setPage})=>{
    const paginationCellClass = (currentPage)=>{
        const classes = currentPage == page ? 'text-blue-600 border border-gray-300 bg-blue-50' : 'text-gray-500 bg-white border border-e-0 border-gray-300';
        return `flex items-center justify-center px-3 h-8 leading-tight ${classes} hover:bg-gray-100 hover:text-gray-700`;
     }
    return (
        <li>
        <a  onClick={()=>setPage(page)} className={paginationCellClass(page)}>{page}</a>
        </li>
    );
}

const Pegination = ({totalData,page,setPage}) => {
    
   

  return (
    <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm">
        <li>
                <a 
                onClick={()=>setPage((prev)=>prev-1)} 
                className={page ==1 ? `flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled-link`
                :
                `flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} >Previous</a>
        </li>
            {
                
                Array.from({length:Math.ceil(totalData/10)},(_,i)=>i+1).map((page)=>{
                    return ( 
                        <PageCell page={page} setPage={setPage}/> 
                    )
                })
            }
           
            <li>
            <a  onClick={()=>setPage((prev)=>prev+1)} className={
                page === Array.from({length:Math.ceil(totalData/10)},(_,i)=>i+1).length ?
                "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled-link"
                :"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                }>Next</a>
            </li>
        </ul>
    </nav>
  )
}

export default Pegination