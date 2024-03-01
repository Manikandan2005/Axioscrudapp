import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import { APIURL } from '../App'
import { Table,Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function Dashboard() {
  
  let navigate = useNavigate()
  let [info,setInfo] = useState([])

  const getInfo = async()=>{
    try{
        let res = await axios.get(APIURL)
        if(res.status===200)
        {
            setInfo(res.data)
        }
    }
    catch(error){
        console.log("Internal server error")
    }
  }

  const toggleBlog = async(e)=>{
    try{   
        let res = await axios.put(`${APIURL}/${e.id}`,e)
        if(res.status===200)
        {
            getInfo()
        }
    }
    catch(error){
        console.log("internal server error")
    }
  }

  const handleDelete = async(id)=>{
    try{
        let res = await axios.delete(`${APIURL}/${id}`)
        if(res.status===200){
            toast.success('Blog Deleted Successfully!')
            getInfo()
        }
    }
    catch(error){
        console.log("Internal server error")
    }
  }

  useEffect(()=>{
    getInfo()
  },[])

  return <div>
  <Topbar/>
  <div className='container-fluid'>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{backgroundColor:'red'}}>ID</th>
          <th style={{backgroundColor:'yellow'}}>Name</th>
          <th style={{backgroundColor:'yellow'}}>Username</th>
          <th style={{backgroundColor:'yellow'}}>Email</th>
          <th style={{backgroundColor:'yellow'}}>Address</th>
          <th style={{backgroundColor:'yellow'}}>Phone</th>
          <th style={{backgroundColor:'yellow'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
        info.map((e,i)=>{
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.phone}</td>
                <td>
                    <Button variant='info' onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                    &nbsp;
                    <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                </td>
            </tr>
        })
       }
      </tbody>
    </Table>
    </div>
  </div>

}

export default Dashboard