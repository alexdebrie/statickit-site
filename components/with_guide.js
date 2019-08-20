import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import OpenGraph from './open_graph';
import CodeBlock from './code_block';
import { MDXProvider } from '@mdx-js/react';
import '../styles/main.css';

const components = {
  h1: ({ children }) => (
    <h1 className="mb-6 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-center">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 mb-4 text-xl sm:text-2xl font-semibold tracking-snug">
      {children}
    </h2>
  ),
  p: ({ children }) => <p className="mb-4 text-gray-800">{children}</p>,
  code: CodeBlock
};

export default meta => ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div>
        <main>
          <Head>
            <meta property="description" content={meta.description} />
          </Head>

          <OpenGraph
            title={meta.title}
            description={meta.description}
            path="/"
          />

          <Header pageTitle={meta.title} />

          <div className="mx-auto py-24 px-6 container">
            <div className="mx-auto max-w-2xl">{children}</div>
          </div>
        </main>

        <Footer />
      </div>
    </MDXProvider>
  );
};
