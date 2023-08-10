import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Header from '@/components/header';
import BackButton from '@/components/backButton';

export default function decodeMonoalphabetic() {
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState('');
  const [plaintext, setPlaintext] = useState(null);
  const [error, setError] = useState(null);

  const defaultAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  function convert(text, key) {
    const decryptedText = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = key.indexOf(char);

      if (index !== -1) {
        const decryptedChar = defaultAlphabet[index];
        decryptedText.push(decryptedChar);
      } else {
        decryptedText.push(char);
      }
    }
    return decryptedText;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ciphertext || !key) {
      setError('Input fields cannot be empty');
      return;
    } else if (key.length !== 26) {
      setError('Key should be exactly 26 characters long');
      return;
    } else {
      setError('');
    }

    const result = convert(ciphertext.toLowerCase(), key);
    setPlaintext(result);
  };

  return (
    <>
      <Header title='Monoalphabetic Cipher Decode | Crack Cipher' />
      <NavBar title='Monoalphabetic Cipher Decryption' />
      <main className='h-auto'>
        <div className='flex flex-col items-center mt-16 h-full px-4'>
          <div className='w-full md:w-3/5 p-4 bg-gray-800 rounded-lg shadow-md text-center text-white'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              {error && <p className='text-white text-lg font-bold'>{error}</p>}
              <label className='flex flex-col gap-2 text-left text-xl'>
                Ciphertext:
                <textarea
                  value={ciphertext}
                  onChange={(e) => setCiphertext(e.target.value)}
                  className='p-2 border rounded-lg text-black w-full'
                  rows='3'
                />
              </label>
              <label className='flex flex-col gap-2 text-left text-xl'>
                Key (26 characters):
                <input
                  type='text'
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className='p-2 border rounded-lg text-black'
                />
              </label>
              <button
                type='submit'
                className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              >
                Decrypt
              </button>
            </form>
            <div className='w-full mt-5 text-2xl overflow-auto'>
              {plaintext && (
                <p className='text-green-300'>Decrypted Text: {plaintext}</p>
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
