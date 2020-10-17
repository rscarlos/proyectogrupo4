import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ListType({types, deleteType}) {
    console.log(types)
    return (
        <div>
  
            <Table>
                <thead>
                    <tr>
                    <th>Nro</th>
                        <th>Nombre de tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
 
                { 
                    types.map(
                        (
                            { 
                                id,
                                producttypeName,
                            }, 
                            i
                        ) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{producttypeName}</td>
                            <td>
                                <button className="btn btn-outline-info btn-sm mr-2">
                                    <i className="fas fa-pen-alt"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteType({id})}}>
                                <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr> 
                        )
                    )                        
                } 
                </tbody>
            </Table>
        </div> 
    )
}
