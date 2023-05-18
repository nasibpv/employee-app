import { React, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function View() {

  const params=useParams()
// console.log(params.id);

//  const [id,setId]=useState(0)
//  const [uname,setUname]=useState('')
//  const [age,setAge]=useState(0)
 const [viewEmp,setEmp]=useState([])

const fetchData=async ()=>{
     const result=await axios.get('http://localhost:8000/viewDetails/'+params.id)
    //
     setEmp(result.data.employee)

}
// console.log(viewEmp);
useEffect(()=>{
  fetchData()
},[])

  return (
   <div>
      <div className='container p-5 mt-5'>
      <Card style={{ width: '26rem'  }} className='container'>
        <ListGroup variant="flush">
          <h3 className='text-center mb-4 mt-4'>EMPLOYEE DETAILS</h3>
          <ListGroup.Item><strong>Name : </strong>{viewEmp.uname}</ListGroup.Item>
          <ListGroup.Item><strong>Age : </strong>{viewEmp.age}</ListGroup.Item>
          <ListGroup.Item><strong>Designation : </strong>{viewEmp.designation} </ListGroup.Item>
          <ListGroup.Item><strong>Salary : </strong>{viewEmp.salary}</ListGroup.Item>
          <div className='text-center'><Link to={'/'}><Button variant="light" className='w-50 m-4 p-2 '>OK</Button></Link></div>
        </ListGroup>
      </Card>
  
      </div>
   </div>
  )
}

export default View