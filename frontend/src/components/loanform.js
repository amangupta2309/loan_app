import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApplicationId } from "../api/services";
import { Paper,TextField,Button} from "@mui/material";



const LoanForm = ()=>{
    const [applicationToken, setApplicationToken] = useState('');
    const navigate = useNavigate();
    const [formError, setFormError] = useState({});


    const [form, setForm] =  useState({
        businessHolder: "",
        businessEmail: "",
        contactNo: "",
        businessName: "",
        businessAddress: "",
        estdYear: "",
        loanAmount: 0,
        accountingProvider: "",
    })
    
    const changeHandler = (e)=>{
        setForm(()=>{
            return{
                ...form,
                [e.target.name]: e.target.value
            }
        })
    
    }

    useEffect(() => {
        getApplicationId()
          .then((response) => response.json())
          .then((data) => {
            setApplicationToken(data.appId);
          });
      });
    
    const submitHandler = (e)=>{
        e.preventDefault();
        const errors = validate(form);
        setFormError(validate(form))
        console.log(Object.keys(errors).length)
        if(Object.keys(errors).length !== 0) return;
        
        const data = {
        tokenId: applicationToken,
        accountingProvider: form.accountingProvider,
        businessName: form.businessName,
        startYear: form.yearEstablished,
        loanAmount: form.loanAmount
        };
        navigate('/loanreview', { state: { data } });
    }

  const validate = (data)=>{
        const error = {};
        if(!data.businessHolder){
            error.businessHolder = "Business Holder field is empty."
        }
        if(!data.businessEmail){
            error.businessEmail= "Business Email field is empty."
        }
        if(!data.contactNo){
            error.contactNo= "Contact No field is empty."
        }
        if(!data.businessName){
            error.businessName= "Business Name field is empty."
        }
        if(!data.businessAddress){
            error.businessAddress= "Business Address field is empty."
        }
        if(!data.estdYear){
            error.estdYear = "Established Year field is empty."
        }
        if(!data.accountingProvider){
            error.accountingProvider = "Accounting Provider field is empty."
        }
        if(!data.loanAmount){
            error.loanAmount = "Loan Amount field is empty"
        }
        return error;
  }

    return(
        <div className="w-[80%] ml-auto mr-auto">
            <Paper elevation={4} className="block mt-8 mb-8 pt-4 pl-8 pr-8 pb-4">
                <form onSubmit={submitHandler} className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Business Holder"
                            name="businessHolder" 
                            variant="outlined"
                            type='text'
                            value={form.businessHolder}
                            onChange={changeHandler}
                            error={formError.businessHolder}
                        />
                        <p className="text-red-500">{ formError.businessHolder }</p>
                    </div>
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Business Email"
                            name="businessEmail" 
                            variant="outlined"
                            type='email'
                            value={form.businessEmail}
                            onChange={changeHandler}
                            error={formError.businessEmail}
                        />
                        <p className="text-red-500">{ formError.businessEmail }</p>
                    </div>
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Contact No"
                            name="contactNo" 
                            variant="outlined"
                            type='tel'
                            value={form.contactNo}
                            onChange={changeHandler}
                            error={formError.contactNo}
                        />
                        <p className="text-red-500">{ formError.contactNo }</p>
                    </div>
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Business Name"
                            name="businessName" 
                            variant="outlined"
                            type='text'
                            value={form.businessName}
                            onChange={changeHandler}
                            error={formError.businessName}
                        />
                        <p className="text-red-500">{ formError.businessName }</p>
                    </div>
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Business Address"
                            name="businessAddress" 
                            variant="outlined"
                            type='text'
                            value={form.businessAddress}
                            onChange={changeHandler}
                            error={formError.businessAddress}
                        />
                        <p className="text-red-500">{ formError.businessAddress }</p>
                    </div>
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Established Year"
                            name="estdYear" 
                            variant="outlined"
                            type='text'
                            value={form.estdYear}
                            onChange={changeHandler}
                            error={formError.estdYear}
                        />
                        <p className="text-red-500">{ formError.estdYear }</p>
                    </div>
                    <div className="flex flex-col">
                        <TextField 
                            id="outlined-basic" 
                            label="Loan Amount"
                            name="loanAmount" 
                            variant="outlined"
                            type='number'
                            value={form.loanAmount}
                            onChange={changeHandler}
                            error={formError.loanAmount}
                        />
                        <p className="text-red-500">{ formError.loanAmount }</p>
                    </div>
                    <div className="field flex flex-col">
                    <select id="accountingProvider" name="accountingProvider" value={form.accountingProvider} onChange={changeHandler}>
                        <option value="">Select Your Accounting Provider</option>
                        <option value="xero">Xero</option>
                        <option value="myob">MYOB</option>
                    </select>
                    <p className="text-red-500">{ formError.accountingProvider }</p>
                    </div>
                    <div className="col-span-2">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}
export default LoanForm;

