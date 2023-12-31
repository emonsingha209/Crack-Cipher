export const cipherData = [
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
      encode: '/monoalphabetic/encode',
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