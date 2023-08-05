import React from 'react'

export default function NavBar(props) {
  return (
    <div className='nav fixed top-0 left-0 right-0 text-white p-4 w-auto'>
        <div className='text-2xl font-extrabold text-gray-200 text-center'>
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}