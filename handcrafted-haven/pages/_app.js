import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // Wrapping each page component in this layout
    <Component {...pageProps} />
  )
}

export default MyApp
