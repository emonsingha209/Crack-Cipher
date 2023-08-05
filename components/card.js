import React from 'react';
import Link from 'next/link';

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
      <div className='mt-4 flex gap-4 text-center'>
        <Link href={props.decode} className='bg-green-600 text-white p-3 w-1/2 rounded hover:bg-green-700'>
          Decode
        </Link>
        <Link href={props.encode} className='bg-green-600 text-white p-3 w-1/2 rounded hover:bg-green-700'>
          Encode
        </Link>
      </div>
    </div>
  );
}
