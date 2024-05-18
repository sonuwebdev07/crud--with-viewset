import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const List = () => {

    const [state,setState]=useState([])

    const getData=()=>{
        axios.get("http://127.0.0.1:8000/api/employees/")
        .then((res)=>{
            setState(res.data)
        })
    }

    useEffect(()=>{
        getData();
    },[])

    const deleteData=(id)=>{

        Swal.fire({
            title: "Are you sure want to delete id no "+id+"?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete("http://127.0.0.1:8000/api/employees/"+id+"/")
                .then((res)=>{
                    getData();
                })

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          

      
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center text-danger fs-3 my-3">Employees List</div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <table className='table table-danger'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((item,index)=>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.eno}</td>
                                    <td>{item.ename}</td>
                                    <td>{item.edesignation}</td>
                                    <td>
                                        <Link className='btn btn-warning text-white' to={`/update/${item.id}`}>Update</Link> &nbsp; &nbsp;
                                        <a className='btn btn-danger' href="#" onClick={()=> deleteData(item.id)}>Delete</a>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default List
