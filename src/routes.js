import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TelaInicial from './Components/landingPage/telaInicioNetflix';

function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                   <Route path="/" exact element={<TelaInicial/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default AppRoutes;