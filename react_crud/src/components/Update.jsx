import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Update = () => {

    const [state,setState]=useState({
        eno:'',
        ename:'',
        edesignation:''
    })

    const params=useParams()
    const _useNavigate=useNavigate()

    const handler=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value})
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/employees/"+params.id+"/")
        .then((res)=>{
            setState(res.data)
        })
    },[])

    const updateData=(e)=>{
        e.preventDefault()
        axios.put("http://127.0.0.1:8000/api/employees/"+params.id+"/",state)
        .then((res)=>{
            _useNavigate("/list")
        })
    }



  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center text-danger fs-3 my-3">Update Employees</div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={updateData} method='post'>
                    <div className='mb-3'>
                        <label htmlFor="eno" className='form-label'>Employee Number : </label>
                        <input type="text" className='form-control' name='eno' onChange={handler} value={state.eno}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="ename" className='form-label'>Employee Name : </label>
                        <input type="text" className='form-control' name='ename' onChange={handler} value={state.ename}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="edesignation" className='form-label'>Employee Designation : </label>
                        <input type="text" className='form-control' name='edesignation' onChange={handler} value={state.edesignation}/>
                    </div>
                    <div className='mb-3'>
                        <input type="submit" className='btn btn-danger' value="Update Employee Data" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Update
