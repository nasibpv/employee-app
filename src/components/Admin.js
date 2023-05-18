import { React, useState, useEffect } from 'react'
import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {
    const [allEmployees,setAllEmployees] = useState([])

    const fetchDatas = async () => {
        const result = await axios.get('http://localhost:8000/getAllEmlpyee')
        setAllEmployees(result.data.employees);
        
    }
    //    console.log(allEmployees);

    useEffect(() => {
        fetchDatas()
    },[])
// 
const handleDelete=async (id)=>{
    const result=await axios.delete('http://localhost:8000/removeEmployee/'+id)
// console.log(result);
    alert(result.data.message)
    // to refresh that table content
    fetchDatas()
}
    return (
        
            <div>
                <div className='text-end mt-3 me-3'>
                    <Link to={'/add'}><Button variant="success"><i class="fa-solid fa-user-plus"></i>Add Employee</Button></Link></div>
                <h2 className='head mt-5 bg-light w-50 container rounded p-2 '>Employee Management App</h2>
                <p>
                    Writing content for an employee App-in just Seven.Writing content for an employee App-in just SevenWriting content for an employee App-in just Seven
                    Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven
                    Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven
                    Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven

                </p>
                <Table className='w-75 container border text-center '
                    striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEmployees?.map((item,index)=>(
                                <tr>
                            <td>{index+1}</td>
                            <td>{item.uname}</td>
                            <td>{item.age}</td>
                            <td>{item.designation}</td>
                            <td>{item.salary}</td>
                            <td className='center'>
                                <Link to={'/edit/'+item.id}><Button className='me-5' variant="secondary"><i class="fa-solid fa-user-pen"></i>Edit</Button></Link>
                                <Link to={'/view/'+item.id}><Button className='me-5' variant="light"><i class="fa-sharp fa-solid fa-book-open-reader"></i>View</Button></Link>

                                <Button variant="danger" onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-user-xmark"></i>Delete</Button>
                            </td>
                        </tr>
                            ))
                        }
                        
                        {/* <td colSpan={2}>Larry the Bird</td> */}
                    </tbody>
                </Table>
            </div>
       
    )
}

export default Admin