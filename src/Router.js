import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Departamentos from './components/Departamentos';
import CreateDepartamento from './components/CreateDepartamento';
import MenuDepartamentos from './components/MenuDepartamentos';
import DetalleDepartamento from './components/DetalleDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';
import UpdateDepartamento from './components/UpdateDepartamento';

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

        function UpdateDepartamentoElement() {
            var { iddepartamento } = useParams();

            return(<UpdateDepartamento id={iddepartamento}/>)
        }

        return (<div>
            <BrowserRouter>
            <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<Departamentos />}/>
                    <Route path='/create' element={<CreateDepartamento />}/>
                    <Route path='/details/:num/:nom/:loc' element={<DetalleDepartamentoElement />}/>
                    <Route path='/delete/:id' element={<DeleteDepartamentoElement />}/>
                    <Route path='/update/:iddepartamento' element={<UpdateDepartamentoElement />}/>
                </Routes>
            </BrowserRouter>



        </div>)
    }
}
