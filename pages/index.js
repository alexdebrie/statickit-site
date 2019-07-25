import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import OpenGraph from '../components/open_graph';
import OptInForm from '../components/opt_in_form';
import ReactDemo from '../components/react_demo';
import CdnDemo from '../components/cdn_demo';
import VanillaDemo from '../components/vanilla_demo';
import '../styles/main.css';

function HomePage() {
  const title = 'Modern forms for static sites';
  const description =
    'Gather form submissions from your static site without writing any backend code.';

  const [tab, setTab] = useState(0);

  const tabClass = (idx, selected) => {
    if (idx == selected) {
      return 'px-4 py-3 font-bold text-white focus:outline-none bg-code';
    } else {
      return 'px-4 py-3 font-bold text-white focus:outline-none';
    }
  };

  const tabContent = selected => {
    switch (selected) {
      case 0:
        return <ReactDemo />;

      case 1:
        return <VanillaDemo />;

      case 2:
        return <CdnDemo />;
      default:
        return '';
    }
  };

  return (
    <div className="antialiased text-gray-900">
      <main>
        <Head>
          <link rel="canonical" href="https://statickit.com/" />
          <meta property="description" content={description} />
        </Head>

        <OpenGraph title={title} description={description} path="/" />

        <Header pageTitle={title} />

        <div className="mx-auto pt-16 container">
          <div className="pb-16 sm:pb-32 flex flex-wrap">
            <div className="px-6 pb-16 sm:pt-12 sm:pb-0 w-full sm:w-1/2 xl:w-2/5">
              <div className="pb-2">
                <span className="text-sm bg-indigo-600 rounded-full px-3 py-1 text-white font-semibold">
                  Introducing
                </span>
              </div>

              <h1 className="pb-6 text-5xl font-semibold leading-tight tracking-snug">
                {title}
              </h1>

              <p className="pb-6 pr-24 text-lg text-gray-700">{description}</p>

              <OptInForm />
            </div>

            <div className="px-6 w-full sm:w-1/2 xl:w-3/5">
              <div className="mb-2 w-full rounded-lg text-sm leading-relaxed overflow-auto bg-code">
                <div className="flex bg-gray-700 rounded-t">
                  <button
                    className={tabClass(0, tab)}
                    onClick={() => setTab(0)}
                  >
                    React
                  </button>
                  <button
                    className={tabClass(1, tab)}
                    onClick={() => setTab(1)}
                  >
                    Plain HTML
                  </button>
                  <button
                    className={tabClass(2, tab)}
                    onClick={() => setTab(2)}
                  >
                    CDN
                  </button>
                </div>

                <div className="p-4">{tabContent(tab)}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
