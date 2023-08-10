import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Header from '@/components/header';
import BackButton from '@/components/backButton';

export default function encode() {
  const [plaintext, setPlaintext] = useState('');
  const [shift, setShift] = useState('');
  const [ciphertext, setCiphertext] = useState(null);
  const [error, setError] = useState(null);

  function convert(text, shift) {
    const asciiCodes = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      let shiftedValue;
      const asciiCode = char.charCodeAt(0);
      if (asciiCode >= 65 && asciiCode <= 90) {
        shiftedValue = ((parseInt(asciiCode) - 65 + parseInt(shift)) % 26) + 65;
      } else if (asciiCode >= 48 && asciiCode <= 57) {
        shiftedValue = ((parseInt(asciiCode) - 48 + parseInt(shift)) % 10) + 48;
      } else {
        shiftedValue = asciiCode;
      }
      asciiCodes.push(shiftedValue);
    }

    let alphabet = '';
    for (let i = 0; i < asciiCodes.length; i++) {
      const char = String.fromCharCode(asciiCodes[i]);
      alphabet += char;
    }

    return alphabet;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!plaintext || !shift) {
      setError('Input Field cannot be empty');
      return;
    } else {
      setError('');
    }
    const result = convert(plaintext.toUpperCase(), shift);
    setCiphertext(result);
  };
  return (
    <>
      <Header title='Caesar Cipher Encode | Crack Cipher' />
      <NavBar title='Caesar Cipher Encryption' />
      <main className='h-auto'>
        <div className='flex flex-col items-center mt-16 h-full px-4'>
          <div className='w-full md:w-3/5 p-4 bg-gray-800 rounded-lg shadow-md text-center text-white'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              {error && <p className='mb-4 text-red-500'>{error}</p>}
              <label className='flex flex-col gap-2 text-left text-xl'>
                Plaintext:
                <textarea
                  value={plaintext}
                  onChange={(e) => setPlaintext(e.target.value)}
                  className='p-2 border rounded-lg text-black w-full'
                  rows='3'
                />
              </label>
              <label className='flex flex-col gap-2 text-left text-xl'>
                Shift:
                <input
                  type='number'
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                  className='p-2 border rounded-lg text-black'
                />
              </label>
              <button
                type='submit'
                className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              >
                Submit
              </button>
            </form>
            <div className='w-full mt-5 text-2xl'>
              {ciphertext && (
                <p className='text-green-300'>Result: {ciphertext}</p>
              )}
            </div>
          </div>
          <div className='invisible md:visible w-full fixed px-2 bottom-2'>
            <BackButton />
          </div>
        </div>
      </main>
    </>
  );
}
