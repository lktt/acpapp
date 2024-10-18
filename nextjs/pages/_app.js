// /nextjs/pages/_app.js
import '../styles/globals.css'; // Import global styles
import Navbar from '../components/Navbar'; // Import the Navbar component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Navbar will appear on every page */}
      <main>
        <Component {...pageProps} /> {/* Renders the current page */}
      </main>
    </>
  );
}

export default MyApp;
