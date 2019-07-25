import ReactSVG from 'react-svg';
import Link from 'next/link';
import Head from 'next/head';

export default props => (
  <header className="mx-auto container px-6 py-4">
    <Head>
      <title>{props.pageTitle} · StaticKit</title>
      <link rel="shortcut icon" href="/static/favicon.png"></link>
    </Head>
    <div className="flex items-center h-10">
      <div className="flex-grow">
        <Link href="/">
          <a className="mr-8 block flex-shrink-0">
            <ReactSVG src="/static/logo.svg" />
          </a>
        </Link>
      </div>
      <div className="text-sm">
        <Link href="/pricing">
          <a className="pl-3">Pricing</a>
        </Link>

        <a href="https://app.statickit.com/" className="ml-6 btn btn-sm btn-outline">Get Started</a>
      </div>
    </div>
  </header>
);
