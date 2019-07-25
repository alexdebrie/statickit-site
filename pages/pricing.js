import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import OpenGraph from '../components/open_graph';
import '../styles/main.css';

function PricingPage() {
  const title = 'Pricing';
  const description = 'Free to get started. Fair and simple pricing.';

  return (
    <div className="antialiased text-gray-900">
      <main>
        <Head>
          <link rel="canonical" href="https://statickit.com/pricing" />
          <meta
            property="description"
            content={description}
            key="description"
          />
        </Head>

        <OpenGraph title={title} description={description} path="/pricing" />

        <Header pageTitle={title} />

        <div className="mx-auto px-6 pt-16 container">
          <h1 className="pb-6 text-5xl font-semibold leading-tight tracking-snug">Fair, simple pricing</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PricingPage;
