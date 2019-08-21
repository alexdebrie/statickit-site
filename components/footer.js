import ReactSVG from 'react-svg';
import Link from 'next/link';
import Head from 'next/head';

export default props => (
  <footer className="border-t">
    <div className="mx-auto container px-3 py-10">
      <div className="pb-6 text-sm text-gray-700">
        <Link href="/guides">
          <a className="px-3">Guides</a>
        </Link>

        <a
          href="https://jsfiddle.net/user/StaticKit/fiddles/"
          className="px-3"
          target="_blank"
        >
          Examples
        </a>

        <Link href="/pricing">
          <a className="px-3">Pricing</a>
        </Link>

        <a
          href="https://github.com/levelhq/legal/blob/master/privacy-policy.md"
          target="_blank"
          className="px-3"
        >
          Privacy Policy
        </a>
      </div>

      <div className="px-3 flex items-center">
        <div className="flex-grow text-sm text-gray-600">
          <span className="mr-5">&copy; Level Technologies, LLC</span>
        </div>
        <div>
          <ReactSVG src="/static/level.svg" />
        </div>
      </div>
    </div>
  </footer>
);
