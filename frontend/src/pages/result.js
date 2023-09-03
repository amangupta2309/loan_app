import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDecision } from '../api/services';
import Approved from '../assets/approved.jpg';
import { Table, TableBody, TableCell, TableRow } from "@mui/material";



const Result = ()=>{
        const {state} = useLocation();
        const [result, setResult] = useState(null);

        useEffect(()=>{
            if(result === null){
                getDecision(state.decisionData)
                .then((response)=> response.json())
                .then((data)=>{
                    setResult(data);
                })
            }
        },[])
    return(
        <div className='flex md:flex-col min-h-[50rem]'>
            <div className='flex justify-center items-center    w-1/2 md:w-[100%]'>
                <img src={Approved} />
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 md:w-[100%]'>
                <div className='text-2xl m-4'>
                    Your loan has been approved
                </div>
                <div>
                    Here is the datails of loan
                </div>
                <Table> 
                    <TableBody>
                        {result && Object.keys(result).map((key, index) => (
                        <TableRow key={index}>
                            <TableCell>{key}</TableCell>
                            <TableCell>{result[key]}</TableCell>
                        </TableRow>
                        ))} 
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Result;