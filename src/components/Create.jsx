import React, { useState } from 'react'
import Topbar from './Topbar'
import { Form,Button } from 'react-bootstrap'
import axios from 'axios'
import { APIURL } from '../App'
import { useNavigate } from 'react-router-dom'

function Create() {

  let navigate = useNavigate()
  let [name,setName]=useState("")
  let [username,setUname]=useState("")
  let [email,setEmail]=useState("")
  let [address,setAddress] = useState("")
  let [phone,setPhone] = useState("")

  const createBlog = async()=>{
   try{
    let data = {name,username,email,address,phone}
    let res = await axios.post(APIURL,data)

    if(res.status===201)
    {
        console.log("data sent")
        navigate('/')
    }
   }
   catch(error){
      console.log("internal server error")
   }
  }

  return <>
  <Topbar/>
  <div>
  <Form className='formWrapper'>
       
  <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' value={username} onChange={(e)=>{setUname(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type='text' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type='text' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
      </Form.Group>

      <Button variant='info' className='mx-auto' onClick={()=>createBlog()}>Create</Button>
    </Form>
  </div>
  </>
}

export default Create