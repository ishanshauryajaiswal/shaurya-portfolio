import '../styles/globals.css';

/**
 * Top-level component for Next.js. This file wraps every page in the
 * application, allowing us to import global styles once. You could also
 * include providers (e.g. context providers) here in the future.
 */
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}