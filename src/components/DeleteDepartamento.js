import React, { Component } from 'react';

export default class DeleteDepartamento extends Component {
    render() {
        return (<div>
            <h1>Delete Departamento
                <span style={{color:"red"}}>{this.props.id}</span>
            </h1>



        </div>)
    }
}
