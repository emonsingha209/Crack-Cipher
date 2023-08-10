import React from 'react';
import Link from 'next/link';

export default function BackButton() {
  return (
    <div className='mt-4 w-3/5'>
      <Link
        href='../'
        className='bg-green-600 text-white p-2 text-lg rounded hover:bg-green-700'
      >
        Back
      </Link>
    </div>
  );
}
