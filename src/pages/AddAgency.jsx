import React, { useState } from "react";
import { useForm,Controller } from "react-hook-form";
import currencyData from "../assets/currency.json";
import Select from "react-select";
import DirectAccessSetting from "../components/DirectAccessSetting";
import SpendCap from "../components/SpendCap";

function AddAgency({isOpen,setIsOpen}) {
    const { register, handleSubmit, control, reset,formState:{errors} } = useForm({
        defaultValues:{
            spendCap:{
                "monthlySpendCap":5000,
                "totalSpendCap":0,
                "averageThreshold":1
            }
            
        }
    });
    const [astiveTab, setActiveTab] = useState('SP');
    const currencyOptions = currencyData.map((curr) => ({
        value: curr.CurrencyID,
        label: curr.FullName,
      }));
    const onSubmit = (data) => {
        console.log(data);
      };

console.log('astiveTab',astiveTab)
  return (
    <div className="p-4">
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90vw] h-[90vh]">
            <div className="flex justify-between text-center">
                <h2 className="text-xl font-semibold mb-4 text-gray-400">New Agency</h2>
                <button
                onClick={() => setIsOpen(false)}
                className="bg-cyan-500 text-white px-4 py-2 rounded"
                >
                Close
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* Modal Body */}
            <div className="modal-body">
                <div className="grid grid-cols-2 gap-2 p-2 ">
                    {/* items */}
                        <div className="">
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency name</label>
                            <input 
                                type="text" 
                                id="first_name" 
                                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                                placeholder="John" 
                                
                                {...register("agencyName",{required:true})}
                            />
                            {errors.agencyName && <p className="text-red-500">Agency Name Is Required</p>}
                        </div>
                        <div className="">
                            <label for="street" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency Street:</label>
                            <input 
                            type="text" 
                            id="street" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Agency Street" 
                            
                            {...register("agencyStreet")}
                            />
                        </div>
                        <div className="">
                            <label for="street" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency City</label>
                            <input 
                            type="text" 
                            id="street" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Agency City" 
                            
                            {...register("agencyCity")}
                            />
                        </div>
                        <div className="">
                            <label for="street" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Admin Telephone</label>
                            <input 
                            type="text" 
                            id="street" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Admin Telephone" 
                            
                            {...register("agencyTelephone")}
                            />
                        </div>
                        <div className="">
                            <label for="holdingCompany" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Holding Company</label>
                            <input 
                            type="text" 
                            id="holdingCompany" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Holding Company" 
                            
                            {...register("holdingCompany")}/>
                        </div>
                        <div className="">
                            <label for="agencyWebsite" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency Website</label>
                            <input 
                            type="text" 
                            id="agencyWebsite" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Agency Website" 
                            
                            {...register("agencyWebsite")} />
                        </div>
                        <div className="">
                            {/* <label for="street" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Status</label> */}
                            <label className="inline-flex items-center me-5 cursor-pointer">
                                <input 
                                type="checkbox" 
                                {...register("status")}
                                className="sr-only peer" />
                                <span className="mr-3 text-sm font-medium text-gray-700 dark:text-gray-300">Status</span>
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
                                
                            </label>
                        </div>
                        <div className="">
                            <label for="agencyStreet" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency Street</label>
                            <input 
                            type="text" 
                            id="agencyStreet" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Agency Street" 
                            
                            {...register("agencyStreet")} />
                        </div>
                        <div className="">
                            <label for="agencyZip" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency Zip</label>
                            <input 
                            type="text" 
                            id="agencyZip" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Agency Zip" 
                            
                            {...register("agencyZip")}/>
                        </div>
                        <div className="">
                            <label for="agencyCountry" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency Country</label>
                            <input 
                            type="text" 
                            id="agencyCountry" 
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                            placeholder="Agency Country" 
                            {...register("agencyCountry")}
                            />
                        </div>
                        <div className="">
                            <label for="agencyCurrency" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white flex-1/6">Agency Currency</label>
                            <Controller
                            name="agencyCurrency"
                            control={control}
                            rules={{required:true}}
                            render={({field})=>(
                                <Select
                                {...field}
                                options={currencyOptions}
                                placeholder="Choose a Currency"
                                className="text-sm"
                                />
                            )}
                            />  
                            
                            {errors.agencyCurrency && <p className="text-red-500">Agency Currency Is Required</p>}
                        </div>
                        <div className="flex items-center mt-2">
                            <label for="testAgency" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white mr-2">Test Agency</label>
                            <input  
                            id="testAgency" 
                            type="checkbox" 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            {...register("testAgency")}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label for="trackingType" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white mr-2">Tracking Type:</label>
                            <div className="flex items-center me-4">
                                <input 
                                id="totalSpend" 
                                type="radio" 
                                value="1" 
                                name="trackingType" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none" 
                                {...register("trackingType")}/>
                                <label for="totalSpend" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total Spend</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input 
                                id="billableRate" 
                                type="radio" 
                                value="2" 
                                name="trackingType" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
                                {...register("trackingType")}/>
                                <label for="billableRate" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Billable Rate</label>
                            </div>
                        </div>
                </div>
                <div className="tab-sectiom p2 ">
                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 shadow-2xl">
                        <ul className="flex flex-wrap -mb-px">
                            <li className="me-2">
                                <a 
                                href="#" 
                                className={`inline-block p-4  rounded-t-lg ${astiveTab ==='DAS'? 'text-teal-600 border-b-2 border-teal-600' :''} `}
                                onClick={(e)=>setActiveTab('DAS')}>
                                    {Object.values(errors?.directAccessSetting ||{}).length>0 ? <span className='text-red-500 me-2 text-sm'>Error</span>:''}
                                    Direct Access Settings
                                    
                                    
                                </a>
                            </li>
                            <li className="me-2">
                                <a href="#" className={`inline-block p-4 rounded-t-lg ${astiveTab ==='SP'? 'text-teal-600 border-b-2 border-teal-600' :''}`} aria-current="page" onClick={(e)=>setActiveTab('SP')}>
                                {Object.values(errors?.spendCap || {}).length>0 ? <span className='text-red-500 me-2 text-sm'>Error</span>:''}
                                    Spend Cap
                                </a>
                            </li>
                        </ul>
                        <div className="p-4 text-left text-gray-700">
                            <div className={astiveTab === 'DAS' ? '':'hidden'}>
                                <DirectAccessSetting register={register} errors={errors}/>
                            </div>
                             
                            
                            <div className={astiveTab === 'SP'? '':'hidden'}>
                                <SpendCap register={register} />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-teal-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal"  className="text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
                <button 
                data-modal-hide="default-modal" 
                type="button" 
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={(e)=>{
                    reset(
                    {
                        "agencyName": "",
                        "agencyStreet": "",
                        "agencyCity": "",
                        "agencyTelephone": "",
                        "holdingCompany": "",
                        "agencyWebsite": "",
                        "status": false,
                        "agencyZip": "",
                        "agencyCountry": "",
                        "testAgency": false,
                        "trackingType": null,
                        "agencyCurrency": ""
                    }
                );
                setIsOpen(false);
            }}
                >Cansel Changes</button>
            </div>
            </form>
            
            
          </div>
          
        </div>
      )}
    </div>
  );
}

export default AddAgency;

