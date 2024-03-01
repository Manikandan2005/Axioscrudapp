import React from 'react'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Create from '../components/Create'
import { Navigate} from 'react-router-dom'

const Approutes = [
   
    {
        path:'/',
        exact:true,
        element:<Dashboard/>
    },
    {
        path:'/edit/:id',
        exact:true,
        element:<Edit/>
    },
    {
        path:'/create',
        exact:true,
        element:<Create/>
    },
    {
        path:'*',
        exact:false,
        element:<Navigate to='/'/>
    }
]

export default Approutes