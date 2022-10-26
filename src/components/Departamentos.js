import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import loading from './../assets/images/img1.jpg';
import { NavLink } from 'react-router-dom';

export default class Departamentos extends Component {

    state = {
        departamentos: [] ,
        status: false
    }

    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;

        axios.get(url).then( res => {
            this.setState({
                departamentos : res.data ,
                status : true
            });
        });

    }
    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        //ESTO ES JAVASCRIPT
        if(this.state.status == false) {
            //LOADING
            return (<div>
                <img src={loading} />
            </div>)
        } else {
            //PINTAMOS NUESTRO DIBUJO
            return (<div>
                <h1>Departamentos</h1>

                <table className='table table-bordered table-warning'>
                    <thead>
                        <tr>
                            <th>Numeros</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th>Enlace</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return (<tr key={dept.numero}>
                                    <td>{dept.numero}</td>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <NavLink to={`/details/${dept.numero}/${dept.nombre}/${dept.localidad}`} className="btn btn-success">Details</NavLink>
                                        <NavLink to={"/details/" + dept.numero + "/" + dept.nombre + "/" + dept.localidad} className="btn btn-success">Details</NavLink>
                                        <NavLink to={"/delete/" + dept.numero} className="btn btn-danger">Eliminar</NavLink>
                                        <NavLink to={"/update/" + dept.numero} className="btn btn-info">Modificar</NavLink>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>)
        }
    }
}
