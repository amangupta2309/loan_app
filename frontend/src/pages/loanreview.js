import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getBalanceSheet } from '../api/services';
import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";




const Loanreview = ()=>{
    const { state } = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length === 0) {
            getBalanceSheet(state.data)
            .then((response) => response.json())
            .then((balanceSheet) => {
              setData(balanceSheet.sheet);
            });
            console.log(data)
        }
      }, []);

    const submitHandler = ()=>{
        const decisionData = {
            ...state.data,
            sheet: data
        }
        navigate('/result', { state: { decisionData } });
        console.log("testing")
    }
    return(
        <div className='bg-gray-500 p-8'>
            <div className='flex justify-center items-center h-12 bg-gray-700 text-white rounded-lg text-2xl'>
                Here is the datails of review.
            </div>
            <Paper elevation={8} className='ml-16 mr-16 mt-8 mb-8'>
                <div className='flex justify-center'>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Profit or Loss</TableCell>
                        <TableCell align="right">Asset Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row,index) => (
                        <TableRow
                          key={row.index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.year}
                          </TableCell>
                          <TableCell align="right">{row.month}</TableCell>
                          <TableCell align="right">{row.profitOrLoss}</TableCell>
                          <TableCell align="right">{row.assetsValue}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </div>
                <div className='flex justify-center'>
                    <Button onClick={submitHandler}>submit</Button>
                </div>
            </Paper>
        </div>
    )
}

export default Loanreview;


// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
