import { React, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import uuid from 'react-uuid';


function Add() {
  const [id, setId] = useState(0)
  const [name, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesignation] = useState('')
  const [salary, setSalary] = useState(0)

  useEffect(() => {
    // uuid()
    setId(uuid().slice(0,4))
  }, [])

  // create an object for the hokk
  let location=useNavigate()

  const addEmployee = async(e) => {
    e.preventDefault() //automatic run stoped 
    setId(uuid().slice(0,4));
    const body = {
      id,
      uname:name,
      age, 
      designation:desig, 
      salary
    }
    // api request
   
      const result = await axios.post('http://localhost:8000/addEmployee',body)
      alert(result.data.message)
      location('/')
  }

  return (
    <div>
      <h2 className='head mt-5  '>Employee Management App</h2>
      <p>
        Writing content for an employee App-in just Seven.Writing content for an employee App-in just SevenWriting content for an employee App-in just Seven
        Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven
        Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven
        Writing content for an employee App-in just SevenWriting content for an employee App-in just SevenWriting content for an employee App-in just Seven

      </p>
      <h2 className='head mt-5 p-2 '> <i class="fa-solid fa-user-plus"></i>Add Employee</h2>

      <Form className='w-75 container p-5 mt-1'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User name</Form.Label>
          <Form.Control onChange={(e) => setUname(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={(e) => setAge(e.target.value)} type='age' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Designation</Form.Label>
          <Form.Control onChange={(e) => setDesignation(e.target.value)} type='text' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Salary</Form.Label>
          <Form.Control onChange={(e) => setSalary(e.target.value)} type='text' />
        </Form.Group>

        <Button onClick={(e) => addEmployee(e)} className='p-2 m-2 ms-2' variant="light">Submit</Button>

        <Link to={'/'}><Button className='p-2 ms-2' variant="warning">Cancel</Button></Link>

      </Form>
    </div>
  )
}

export default Add