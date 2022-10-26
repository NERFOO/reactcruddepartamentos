import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Departamentos from './components/Departamentos';
import CreateDepartamento from './components/CreateDepartamento';
import MenuDepartamentos from './components/MenuDepartamentos';
import DetalleDepartamento from './components/DetalleDepartamento';

export default class Router extends Component {
    render() {

        function DetalleDepartamentoElement() {
            var {num, nom, loc} = useParams();

            return(<DetalleDepartamento iddepartamento={num} nombre={nom} localidad={loc} />)

        }

        return (<div>
            <BrowserRouter>
            <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<Departamentos />}/>
                    <Route path='/create' element={<CreateDepartamento />}/>
                    <Route path='/details/:num/:nom/:loc' element={<DetalleDepartamentoElement />}/>
                </Routes>
            </BrowserRouter>



        </div>)
    }
}
