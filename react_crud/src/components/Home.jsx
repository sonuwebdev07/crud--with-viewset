import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {

    const [state, setState] = useState({
        eno: '',
        ename: '',
        edesignation: ''
    })

    const handler = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const saveData = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/employees/", state)
            .then((res) => {
                toast.success("Data Saved Successfully !!")
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center text-danger fs-3 my-3">Add Employees</div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={saveData} method='post'>
                            <Toaster />
                            <div className='mb-3'>
                                <label htmlFor="eno" className='form-label'>Employee Number : </label>
                                <input type="text" className='form-control' name='eno' onChange={handler} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="ename" className='form-label'>Employee Name : </label>
                                <input type="text" className='form-control' name='ename' onChange={handler} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="edesignation" className='form-label'>Employee Designation : </label>
                                <input type="text" className='form-control' name='edesignation' onChange={handler} />
                            </div>
                            <div className='mb-3'>
                                <input type="submit" className='btn btn-danger' value="Add Employee Data" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
