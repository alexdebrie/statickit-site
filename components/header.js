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
        <Link href="/" prefetch={false}>
          <a className="mr-8 block flex flex-shrink-0">
            <div className="mr-2">
              <ReactSVG src="/static/logo.svg" />
            </div>
            <div className="text-lg text-indigo-700">β</div>
          </a>
        </Link>
      </div>
      <div className="hidden sm:block text-sm text-gray-700">
        <a href="https://jsfiddle.net/user/StaticKit/fiddles/" className="px-3" target="_blank">
          Examples
        </a>

        <Link href="/pricing">
          <a className="px-3">Pricing</a>
        </Link>

        <a
          href="https://app.statickit.com/signup"
          className="ml-6 btn btn-sm btn-outline"
        >
          Sign up
        </a>
      </div>
    </div>
  </header>
);
