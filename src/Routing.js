import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Appnew from './crud/Appnew';
import RegisterPage from './auth/RegisterPage';
import Dashboard from './auth/Dashboard';
import Invalid from './Invalid';
import Home from './Home';
import RoutingPath from './RoutingPath';
//lazy load
const App = React.lazy(() => import("./auth/App"));

function Routing() {


    return (
        <div>

            <HashRouter>


                <Routes>
                    <Route path='/crud' element={<RoutingPath />} >
                    <Route path='crudForm' element={<Appnew />} />
                    </Route>
                    {/* <Route path='/register' element={<RegisterPage />} />
                    <Route path='/dashboard' element={<Dashboard />} /> */}
                    <Route path='/loginpage' element={<RoutingPath />}>
                        <Route path='login' element={
                            <React.Suspense fallback={<h2>Loading....</h2>}>
                                <App />
                            </React.Suspense>
                        } />
                        <Route path='register' element={<RegisterPage />} />
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>


                    <Route path='*' element={<Invalid />} />
                    <Route path='/' element={<Home />} />



                </Routes>


            </HashRouter>



        </div>

    );
}

export default Routing;
