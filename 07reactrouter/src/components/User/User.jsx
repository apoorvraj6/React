import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div 
    className='bg-gray-600 rounded-2xl text-white p-4 text-lg'>
      User {id}
    </div>
  )
}

export default User
