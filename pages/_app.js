import '@/styles/globals.css';
import Head from 'next/head';
import NavBar from '@/components/navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='A website for crack cipher text'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
