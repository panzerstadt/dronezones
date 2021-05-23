import "tailwindcss/tailwind.css";

// import { GoogleApiProvider } from "react-gapi";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  // return (
  //   <GoogleApiProvider clientId={process.env.G_CLIENT_ID}>
  //     <Component {...pageProps} />;
  //   </GoogleApiProvider>
  // );
}

export default MyApp;
