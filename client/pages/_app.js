import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen my-auto bg-gray-800">
      <Navbar />
      <Component {...pageProps} className="my-auto" />
    </div>
  );
}

export default MyApp;
