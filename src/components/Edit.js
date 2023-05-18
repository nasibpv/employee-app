import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  // object for 
  const params=useParams()
//   console.log(params.id);

   const [id,setId]=useState('')
    const [uname,setUname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState('')

  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getAnEmp/'+params.id)
    // setAllEmployees(result.data.employees);
    // console.log(result.data.employee);
    setId(result.data.employee.id)
    setUname(result.data.employee.uname)
    setAge(result.data.employee.age)
    setDesignation(result.data.employee.designation)
    setSalary(result.data.employee.salary)
}
console.log(uname);
//  
let location=useNavigate()
const editEmployee=async(e)=>{
    e.preventDefault()
    const data={
        id,
        uname,
        age,
        designation,
        salary
    }
    const result=await axios.post('http://localhost:8000/updateEmp',data)
            alert(result.data.message)
            // console.log(result);
            location('/')
}

// const handleUpdate=async(e)=>{
//   e.preventDefult()
//   const body ={
//     id,uname,age,designation,salary
//   }
  
// }

  useEffect(() => {
      fetchEmp()
  },[])
  return (
    <div>
       <h2 className='head mt-5  '>Edit Employee details</h2>
                <p>
                    Writing content for an employee App-in just Seven.Writing content for an employee App-in just SevenWriting content for an employee App-in just Seven
                    Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven
                    Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven
                    Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven

                </p>
                <h2 className='head mt-5 p-2 '> <i class="fa-solid fa-user-plus"></i>Edit Employee</h2>

                <Form className='w-50 container p-5 mt-1'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User name</Form.Label>
        <Form.Control  type="text" placeholder="" value={uname} onChange={(e)=>setUname(e.target.value)}/>
      </Form.Group>
      {/* onChange={(e)=>setUname(e.target.value)} */}
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Age</Form.Label>
        <Form.Control type='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Designation</Form.Label>
        <Form.Control  type='text'  value={designation} onChange={(e)=>setDesignation(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Salary</Form.Label>
        <Form.Control  type='text' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>

      <Button  className='p-2 m-2 ms-2' onClick={(e)=>editEmployee(e)} variant="light">Submit</Button>

      
    </Form>
    </div>
  )
}

export default Edit