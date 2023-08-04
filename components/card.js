import React from 'react';

export default function Card(props) {
  return (
    <div className='bg-sky-400 h-fit p-4 m-4 rounded shadow-md'>
      <div className='flex items-center justify-center'>
        <div className='text-center text-2xl bg-blue-900 text-white rounded-full p-6 w-fit h-fit flex items-center justify-center shadow-lg'>
          <h1>{props.name}</h1>
        </div>
      </div>
      <div className='mt-4 text-center'>
        <p className='text-sm text-gray-600'>
          {props.details}
        </p>
      </div>
      <div className='mt-4 flex gap-4'>
        <button className='bg-green-600 text-white p-3 w-1/2 rounded hover:bg-green-700'>
          Decode
        </button>
        <button className='bg-green-600 text-white p-3 w-1/2 rounded hover:bg-green-700'>
          Encode
        </button>
      </div>
    </div>
  );
}
