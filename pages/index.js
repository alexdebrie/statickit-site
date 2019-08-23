import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import OpenGraph from '../components/open_graph';
import ReactDemo from '../components/react_demo';
import StandaloneDemo from '../components/standalone_demo';
import '../styles/main.css';

function HomePage() {
  const title = 'Modern forms for static sites';
  const description =
    'Gather form submissions from your frontend without writing a line of backend code.';

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
        return <StandaloneDemo />;
      case 1:
        return <ReactDemo />;
      default:
        return '';
    }
  };

  return (
    <div>
      <main>
        <OpenGraph title={title} description={description} path="/" />
        <Header pageTitle={title} />

        <div className="mx-auto pt-16 container">
          <div className="pb-16 sm:pb-32 flex flex-wrap">
            <div className="px-6 pb-16 sm:pt-12 sm:pb-0 w-full sm:w-1/2 xl:w-2/5">
              <h1 className="pb-6 text-5xl font-semibold leading-tight tracking-tight">
                {title}
              </h1>

              <p className="pb-8 lg:pr-24 text-lg text-gray-700">
                {description}
              </p>

              <a
                href="https://app.statickit.com/"
                className="btn focus:shadow-outline"
              >
                Create a form
              </a>
            </div>

            <div className="px-6 w-full sm:w-1/2 xl:w-3/5">
              <div className="mb-2 w-full rounded-lg text-sm leading-relaxed overflow-auto bg-code">
                <div className="flex bg-gray-700 rounded-t">
                  <button
                    className={tabClass(0, tab)}
                    onClick={() => setTab(0)}
                  >
                    Plain HTML
                  </button>
                  <button
                    className={tabClass(1, tab)}
                    onClick={() => setTab(1)}
                  >
                    React
                  </button>
                </div>

                <div>{tabContent(tab)}</div>
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
