import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../pages/landing';
import Loandetails from '../pages/loandetails';
import Loanreview from '../pages/loanreview';
import Result from '../pages/result';

const routes = ()=>{
    return(
        <Fragment>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                     <Route path='/loandetails' element={<Loandetails />} />
                    <Route path='/loanreview' element={<Loanreview />} />
                    <Route path='/result' element={<Result />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </Fragment>
    )
}

export default routes;