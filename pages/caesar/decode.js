import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Header from '@/components/header';
import BackButton from '@/components/backButton';

export default function encode() {
  const [ciphertext, setCipherText] = useState('');
  const [shift, setShift] = useState(0);
  const [plaintext, setPlaintext] = useState(null);
  const [error, setError] = useState(null);

  function convert(text, shift) {
    const asciiCodes = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      let shiftedValue;
      const asciiCode = char.charCodeAt(0);
      if (asciiCode >= 65 && asciiCode <= 90) {
        shiftedValue =
          ((parseInt(asciiCode) - 65 - parseInt(shift) + 26) % 26) + 65;
      } else if (asciiCode >= 48 && asciiCode <= 57) {
        shiftedValue =
          ((parseInt(asciiCode) - 48 - parseInt(shift) + 10) % 10) + 48;
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
    if (!ciphertext) {
      setError('Input Field cannot be empty');
      return;
    } else {
      setError('');
    }
    const result = [];
    let preResult;
    if (shift == 0) {
      for (let i = 1; i <= 25; i++) {
        preResult = convert(ciphertext.toUpperCase(), i);
        result.push(preResult + ' - ' + i + ' | ');
      }
    } else {
      preResult = convert(ciphertext.toUpperCase(), shift);
      result.push(preResult);
    }
    setPlaintext(result);
  };
  return (
    <>
      <Header title='Caesar Cipher Encode | Crack Cipher' />
      <NavBar title='Caesar Cipher Decryption' />
      <main className='flex items-center justify-center'>
        <div className='w-3/5 h-fit p-4 flex flex-col items-center justify-center rounded text-2xl'>
          <form className='flex flex-col w-3/5 gap-4' onSubmit={handleSubmit}>
            {error && <p className='mb-4 text-center'>{error}</p>}
            <label className='flex flex-col gap-2'>
              Cipherext:
              <textarea
                value={ciphertext}
                onChange={(e) => setCipherText(e.target.value)}
                className='p-2 border rounded-lg text-black w-full'
                rows='3'
              />
            </label>
            <label className='flex flex-col gap-2'>
              Shift: (If shift key unknown, leave as shift key 0. Check one or
              two words for shift key discovery.)
              <input
                type='number'
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                min={0}
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
          <div className='w-3/5 mt-5 '>
            {plaintext && <p>Result: {plaintext}</p>}
          </div>
          <BackButton />
        </div>
      </main>
    </>
  );
}
