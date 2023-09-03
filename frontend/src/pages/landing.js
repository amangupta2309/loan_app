import React from 'react'
import { Link} from 'react-router-dom';
import LandingSvg from '../assets/landing.jpg'
import { Button } from '@mui/material';


const Landing = ()=>{

    return(
        <div className='flex lg:flex-col items-center min-h-[40rem]'>
            <div className='flex flex-col w-1/3 lg:w-[100%] pl-4 pr-4'>
                <div className='text-[3rem]'>
                    Loans Made Easy...
                </div>
                <div>
                    <hr className='h-0.5 bg-black'/>
                </div>
                <Button>
                    <Link to='/loandetails'> Apply </Link>
                </Button>
            </div>
            <div className='w-2/3 h-[35rem] lg:w-[100%] overflow-hidden'>
                <img src={LandingSvg} alt={'home svg'}></img>
            </div>
        </div>
    )
}
export default Landing;