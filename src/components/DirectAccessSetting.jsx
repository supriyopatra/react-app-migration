import React from 'react'

const DirectAccessSetting = ({register,errors}) => {
    console.log(Object.values(errors?.directAccessSetting || {}).length)
  return (
    <div className='grid grid-cols-2 gap-3'>
      <div className='grid grid-cols-2 col-span-2'>
        <b>Intacct Invoice Settings</b>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Account Manager:</label>
        <input type="text" name="accountManager" id="accountManager"  placeholder='-' className='focus:outline-0 focus:border-b-2' {...register("directAccessSetting.accountManager",{required:true})}/>
        {errors?.directAccessSetting?.accountManager && <p className="text-red-500 text-sm">Account Manager Is Required</p>}
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Intact Customer ID:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId" {...register("directAccessSetting.intactCustomerId")}  placeholder='-' className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Billing Contact Code:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId" {...register("directAccessSetting.billingContactCode")}  placeholder='-' className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Ship To Contact Code:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId"  placeholder='-' {...register("directAccessSetting.shipTpContactCode")} className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Contract Payment Terms:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId"  placeholder='-' {...register("directAccessSetting.contractPaymentTerms")} className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Salesforce Campaign ID:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId"  placeholder='-' className='focus:outline-0 focus:border-b-2' {...register("directAccessSetting.salesforceCampignId")}/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Sales Rep ID:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId" {...register("directAccessSetting.salesReqId")}  placeholder='-' className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Opportunity ID:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId" {...register("directAccessSetting.opportunityId")}  placeholder='-' className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Opportunity Name:</label>
        <input type="text" name="intactCustomerId" id="intactCustomerId" {...register("directAccessSetting.opportunityName")}  placeholder='-' className='focus:outline-0 focus:border-b-2'/>
      </div>
      <div></div>
      <div className=''>
        <b>Campaign Settings</b> 
      </div>
      <div>
        <b>Default Supply Categories</b>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Enable Billable Units: </label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.enableBillableUnits")}
        /> 
      </div>
      
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Cheap Reach </label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.cheapReach")}
        /> 
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Made for Advertising (MFA)</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.MFA")}
        /> 
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Multi-Hop Reselling</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.multiHopReselling")}
        /> 
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Premium Intermediary-Controlled</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.premiumIntermediaryControlled")}
        /> 
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Premium Publisher-Controlled</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.premiumPublisherControlled")}
        /> 
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="" className='text-gray-400 text-sm'>Unclassified</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500"
        {...register("directAccessSetting.unclassified")}
        /> 
      </div>
      <div></div>
      
    </div>
  )
}

export default DirectAccessSetting
