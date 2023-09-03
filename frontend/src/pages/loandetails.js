import React from 'react';
import Loanform from '../components/loanform'



const Loandetails = ()=>{
    
    return(
        <div className='bg-gray-600 p-4 min-h-[35rem]'>
            <div className='flex bg-gray-700  text-white justify-center min-h-16 w-2/3 ml-auto mr-auto rounded-xl items-center text-2xl'>
                Fill out the complsory details about your business.
            </div>
            <Loanform />
        </div>
    )
}
export default Loandetails;