import React from 'react'

const SpendCap = ({register}) => {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <div className='grid grid-cols-2'>
        <label htmlFor="">Monthly Spend Cap (USD):</label>
        <input type="number" name="monthlySpendCap" id="monthlySpend"   className='focus:outline-0 focus:border-b-2' {...register("spendCap.monthlySpendCap")}/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="">Total Spend Cap (USD):</label>
        <input type="number" name="monthlySpend" id="monthlySpend"   className='focus:outline-0 focus:border-b-2' {...register("spendCap.totalSpendCap")}/>
      </div>
      <div className='grid grid-cols-2'>
        <label htmlFor="">Average Threshold:</label>
        <input type="number" name="monthlySpend" id="monthlySpend"   className='focus:outline-0 focus:border-b-2' {...register("spendCap.averageThreshold")}/>
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="">Monthly Spend Cap Reached:</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500 "
        {...register("spendCap.monthlySpendCapReached")}
        />
      </div>
      <div></div>
      <div className='grid grid-cols-2'>
        <label htmlFor="">Overall Spend Cap Reached:</label>
        <input  
        id="testAgency" 
        type="checkbox" 
        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500 "
        {...register("spendCap.overallSpendCapReached")}
        /> 
      </div>
      <div></div>
    </div>
  )
}

export default SpendCap
