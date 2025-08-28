import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

/**
 * The Home page composes all the sections into a single scrolling
 * experience. SEO tags are defined using Next.js’s Head component.
 */
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Shaurya Jaiswal – Android Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Shaurya Jaiswal – Senior Android developer and mobile architect with experience in Kotlin, Jetpack Compose and scalable app design."
        />
        <meta name="robots" content="index,follow" />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Shaurya Jaiswal – Android Developer" />
        <meta
          property="og:description"
          content="Explore the projects, skills and experience of Shaurya Jaiswal, a seasoned Android developer and platform lead."
        />
        <meta property="og:image" content="/images/hero-bg.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shaurya-portfolio.example.com" />
      </Head>
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Contact />
    </Layout>
  );
}