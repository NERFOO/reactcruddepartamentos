import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Departamentos from './components/Departamentos';
import CreateDepartamento from './components/CreateDepartamento';
import MenuDepartamentos from './components/MenuDepartamentos';
import DetalleDepartamento from './components/DetalleDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';

export default class Router extends Component {
    render() {

        function DetalleDepartamentoElement() {
            var {num, nom, loc} = useParams();

            return(<DetalleDepartamento iddepartamento={num} nombre={nom} localidad={loc} />)
        }

        function DeleteDepartamentoElement() {
            var { id } = useParams();

            return(<DeleteDepartamento id={id} />)
        }

        return (<div>
            <BrowserRouter>
            <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<Departamentos />}/>
                    <Route path='/create' element={<CreateDepartamento />}/>
                    <Route path='/details/:num/:nom/:loc' element={<DetalleDepartamentoElement />}/>
                    <Route path='/delete/:id' element={<DeleteDepartamentoElement />}/>
                </Routes>
            </BrowserRouter>



        </div>)
    }
}
