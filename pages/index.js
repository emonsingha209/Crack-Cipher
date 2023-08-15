import Header from '@/components/header';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import { cipherData } from '@/components/data/ciphers';

export default function Home() {
  return (
    <>
      <Header title='Home | Crack Cipher' />
      <NavBar title='Crack Cipher' />
      <main>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 mb-0 pb-4'>
          {cipherData.map((cipher, index) => (
            <div key={index}>
              <div className='bg-sky-400 h-fit p-4 m-4 rounded shadow-md'>
                <div className='flex items-center justify-center'>
                  <div className='text-center text-2xl bg-blue-900 text-white rounded-full p-6 w-fit h-fit flex items-center justify-center shadow-lg'>
                    <h1>{cipher.name}</h1>
                  </div>
                </div>
                <div className='mt-4 text-center'>
                  <p className='text-sm text-gray-800'>{cipher.details}</p>
                </div>
                <div className='mt-4 flex gap-4 text-center'>
                  {cipher.name === 'Caesar Cipher' ||
                  cipher.name === 'Monoalphabetic Cipher' ? (
                    <>
                      <Link
                        href={cipher.decode}
                        className='bg-blue-800 text-white p-3 w-1/2 rounded hover:bg-blue-900'
                      >
                        Decrypt
                      </Link>
                      <Link
                        href={cipher.encode}
                        className='bg-blue-800 text-white p-3 w-1/2 rounded hover:bg-blue-900'
                      >
                        Encrypt
                      </Link>
                    </>
                  ) : (
                    <p className='bg-blue-800 p-3 w-full rounded'>
                      Under Development
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
