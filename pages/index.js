import Head from 'next/head';
import Layout, { siteTitle } from './components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Federico and I am a developer</p>
        <p>
          I am trying nextjs
        </p>
      </section>
    </Layout>
  );
}
