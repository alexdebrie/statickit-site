import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import OptInForm from '../components/opt_in_form';
import ReactDemo from '../components/react_demo';
import '../styles/main.css';

function HomePage() {
  const title = 'Modern forms for static sites';
  const description =
    'StaticKit is a collection of components backed by our API so you can quit reinventing the wheel for already-solved problems.';

  return (
    <div className="antialiased text-gray-900">
      <main>
        <Head>
          <link rel="canonical" href="https://statickit.com/" />
          <meta property="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:description" content={description} />
          <meta property="og:url" content="https://statickit.com/" />
          <meta property="og:site_name" content="StaticKit" />
          <meta
            property="og:image"
            content="https://statickit.com/static/logo-300.png"
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </Head>

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
                  <div className="px-4 py-3 font-bold text-white rounded-tl bg-code">
                    Forms
                  </div>
                  <div className="px-4 py-3 text-gray-300 italic">
                    More coming soon
                  </div>
                </div>

                <div className="p-4">
                  <ReactDemo />
                </div>
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
