import Card from '@/components/card'
import Header from '@/components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-800'>
      <Header title='Home | Crack Cipher' />
      <main>
        <div className='grid grid-cols-3 m-4 mb-0 pb-4'>
          <div>
            <Card
              name='Caesar Cipher'
              details='Caesar cipher is a substitution cipher where each letter in the
          plaintext is shifted a certain number of places down or up the
          alphabet.'
            />
          </div>
          <div>
            <Card
              name='Monoalphabetic Cipher'
              details='A substitution cipher where each letter in the plaintext is replaced 
          by a fixed letter in the ciphertext, using a 26-letter mapping.'
            />
          </div>
          <div>
            <Card
              name='Playfair Cipher'
              details='A digraph substitution cipher where pairs of letters in the plaintext 
          are replaced using a 5x5 key matrix based on a keyword.'
            />
          </div>
          <div>
            <Card
              name='Polyalphabetic Cipher'
              details='The Polyalphabetic Cipher is a substitution cipher that uses multiple 
          alphabets to encrypt the plaintext. Each letter in the plaintext is shifted based 
          on a different alphabet determined by a repeating keyword.'
            />
          </div>
          <div>
            <Card
              name='Vigenère Cipher'
              details='The Vigenère Cipher is a type of Polyalphabetic Cipher. It uses a 
          keyword to encrypt the plaintext by shifting each letter of the plaintext using 
          different Caesar ciphers based on the letters of the keyword.'
            />
          </div>
          <div>
            <Card
              name='Rail Fence Cipher'
              details='The Rail Fence Cipher is a transposition cipher. It rearranges plaintext 
          in a zigzag pattern over fixed rails, then reads characters row by row to create the 
          ciphertext. Not secure for modern encryption.'
            />
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <Card
              name='Row Transposition Cipher'
              details='The Row Transposition Cipher is another type of transposition cipher. It 
          involves writing the plaintext into a matrix with a fixed number of columns and then 
          rearranging the columns based on a predetermined key before reading the ciphertext column 
          by column.'
            />
          </div>
        </div>
      </main>
    </div>
  )
}
