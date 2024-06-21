// src/pages/_app.tsx

import type { AppProps } from 'next/app';
import '/src/app/globals.css'; // Ensure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
