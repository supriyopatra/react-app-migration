import React,{useState} from 'react';
import AgencyData from '../assets/agency.json';
import AddAgency from './AddAgency';

const Status = ({s})=>{
    const classStyle = {
        'Disabled':'text-grey-600',
        'Active':'text-green-600'
    };
    return (
        <a href="#" className={`font-bold uppercase ${classStyle[s]} text-xs`}>{s}</a>
    );
}
const Agency = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAgency, setSelectedAgency] = useState([]);
    const selectAgencies = (e)=>{
       
        if(!selectedAgency.includes(Number(e.target.value))){
            setSelectedAgency((preValue)=>[...preValue,Number(e.target.value)]);
            
        }else{
            
           const filterUnselectAgency = selectedAgency.filter((v)=>v !=Number(e.target.value))
           setSelectedAgency([...filterUnselectAgency]);
        }
       
    }
    const onCheckAll = (e)=>{
        if(e.target.checked){
            const allAgency = AgencyData.Value.aaData.map((v)=>v.AgencyID);
            setSelectedAgency([...allAgency]);
        }else{
            setSelectedAgency([]);
        }
    }
  return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 bg-white">
            <AddAgency isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="flex justify-between">
                <div className='Action'>
                <button type="button" class="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex items-center justify-center" onClick={() => setIsOpen(true)}>
                    <svg className="w-3.5 h-3.5 me-2 hover:text-white" aria-hidden="true" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.402 45.402" xml:space="preserve" stroke="#26c4cf" stroke-width="0.00045402" transform="matrix(-1, 0, 0, 1, 0, 0)"> <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path></svg>
                    Add Agency
                </button>
                
                </div>
                
                <div className="pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                    </div>
                </div>
            </div>
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 h-[75vh]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input 
                                id="checkbox-all-search" 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={selectedAgency.length === AgencyData.Value.aaData.length}
                                onClick={onCheckAll} 
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3 col-span-2">
                            Agency Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Logo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                            Action
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        AgencyData.Value.aaData.map((v)=>{
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={v.AgencyID}>
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" 
                                            onChange={selectAgencies}
                                            value={v.AgencyID}
                                            type="checkbox" 
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={selectedAgency.includes(v.AgencyID)}
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {v.AgencyID}
                                    </th>
                                    <td className="px-6 py-4">
                                        {v.Name}
                                    </td>
                                    <td className="px-6 py-4">
                                    {v.AgencyLogo}
                                    </td>
                                    <td className="px-6 py-4">
                                    
                                    {/* <a href="#" className={`font-bold text-blue-600`}>{v.Status}</a> */}
                                    <Status s={v.Status}/>
                                    </td>
                                    
                                </tr>
                            );
                        })
                    }
                    
                    
                </tbody>
            </table>
        </div>
  );
}

export default Agency
