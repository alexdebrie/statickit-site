import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import OpenGraph from './open_graph';
import { MDXProvider } from '@mdx-js/react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-diff';

const components = {
  pre: props => {
    useEffect(() => {
      Prism.highlightAll();
    });

    return <pre {...props} />;
  }
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
                <Link href="/guides">
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
