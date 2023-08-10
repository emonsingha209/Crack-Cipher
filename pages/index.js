import Header from '@/components/header';
import NavBar from '@/components/navbar';
import Link from 'next/link';

const cipherData = [
  {
    name: 'Caesar Cipher',
    details:
      'Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.',
    decode: '/caesar/decode',
    encode: '/caesar/encode',
  },
  {
    name: 'Monoalphabetic Cipher',
    details:
      'A substitution cipher where each letter in the plaintext is replaced by a fixed letter in the ciphertext, using a 26-letter mapping.',
    decode: '/monoalphabetic/decode',
    encode: '/monoalphabetic/decode',
  },
  {
    name: 'Playfair Cipher',
    details:
      'A digraph substitution cipher where pairs of letters in the plaintext are replaced using a 5x5 key matrix based on a keyword.',
    decode: '/caesar/decode',
    encode: '/caesar/decode',
  },
  {
    name: 'Polyalphabetic Cipher',
    details:
      'The Polyalphabetic Cipher is a substitution cipher that uses multiple alphabets to encrypt the plaintext. Each letter in the plaintext is shifted based on a different alphabet determined by a repeating keyword.',
    decode: '/caesar/decode',
    encode: '/caesar/decode',
  },
  {
    name: 'Vigenère Cipher',
    details:
      'The Vigenère Cipher is a type of Polyalphabetic Cipher. It uses a keyword to encrypt the plaintext by shifting each letter of the plaintext using different Caesar ciphers based on the letters of the keyword.',
    decode: '/caesar/decode',
    encode: '/caesar/decode',
  },
  {
    name: 'Rail Fence Cipher',
    details:
      'The Rail Fence Cipher is a transposition cipher. It rearranges plaintext in a zigzag pattern over fixed rails, then reads characters row by row to create the ciphertext. Not secure for modern encryption.',
    decode: '/caesar/decode',
    encode: '/caesar/decode',
  },
  {
    name: 'Row Transposition Cipher',
    details:
      'The Row Transposition Cipher is another type of transposition cipher. It involves writing the plaintext into a matrix with a fixed number of columns and then rearranging the columns based on a predetermined key before reading the ciphertext column by column.',
    decode: '/caesar/decode',
    encode: '/caesar/decode',
  },
];

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
                  <p className='text-sm text-gray-600'>{cipher.details}</p>
                </div>
                <div className='mt-4 flex gap-4 text-center'>
                  {cipher.name === 'Caesar Cipher' ||
                  cipher.name === 'Monoalphabetic Cipher' ? (
                    <>
                      <Link
                        href={cipher.decode}
                        className='bg-green-600 text-white p-3 w-1/2 rounded hover:bg-green-700'
                      >
                        Decrypt
                      </Link>
                      <Link
                        href={cipher.encode}
                        className='bg-green-600 text-white p-3 w-1/2 rounded hover:bg-green-700'
                      >
                        Encrypt
                      </Link>
                    </>
                  ) : (
                    <p className='bg-green-600 p-3 w-full rounded'>
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
