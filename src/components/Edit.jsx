import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import { Form,Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { APIURL } from '../App'

function Edit() {
 
  let navigate = useNavigate()
  let params = useParams()
  let [name,setName]=useState("")
  let [username,setUname]=useState("")
  let [email,setEmail]=useState("")
  let [address,setAddress] = useState("")
  let [phone,setPhone] = useState("")

  const getInfo = async()=>{
   try{
    let res = await axios.get(`${APIURL}/${params.id}`)
    if(res.status===200)
    {
       setName(res.data.name)
       setUname(res.data.username)
       setEmail(res.data.email)
       setAddress(res.data.address)
       setPhone(res.data.phone)
    }
   }
   catch(error){
    console.log("internal server error")
   }
  }

  const updateBlog = async()=>{
    try{
      let data = {name,username,email,address,phone}
      let res = await axios.put(`${APIURL}/${params.id}`,data)
      if(res.status===200)
      {
        navigate('/')
      }
    }
    catch(error){
        console.log("internal server error")
    }
  }

  useEffect(()=>{
    getInfo()
  },[])
  
  return <div>
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


      <Button variant='info' className='mx-auto' onClick={()=>updateBlog()}>Submit</Button>
    </Form>
  </div>
  </div>
}

export default Edit