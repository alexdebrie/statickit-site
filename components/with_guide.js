import React from 'react';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import OpenGraph from './open_graph';
import CodeBlock from './code_block';
import { MDXProvider } from '@mdx-js/react';
import '../styles/main.css';
import '../styles/markdown.css';

const components = {
  code: CodeBlock
};

export default meta => ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div>
        <main>
          <OpenGraph
            title={meta.title}
            description={meta.description}
            path={meta.path}
          />

          <Header pageTitle={meta.title} />

          <div className="mx-auto py-24 px-6 container">
            <div className="mx-auto max-w-2xl">
              <div className="pb-1">
                <Link href="/">
                  <a className="font-semibold text-indigo-600">Guides</a>
                </Link>
              </div>
              <div className="markdown">
                <h1>{meta.title}</h1>
                {children}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MDXProvider>
  );
};
