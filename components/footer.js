import ReactSVG from 'react-svg';
import Link from 'next/link';
import Head from 'next/head';

export default props => (
  <footer className="border-t">
    <div className="mx-auto container px-6 py-10">
      <div className="flex items-center">
        <div className="flex-grow text-sm text-gray-600">
          <span className="mr-5">&copy; Level Technologies, LLC</span>
          <a href="https://github.com/levelhq/legal/blob/master/privacy-policy.md" target="_blank" className="text-indigo-600">Privacy Policy</a>
        </div>
        <div>
          <ReactSVG src="/static/level.svg" />
        </div>
      </div>
    </div>
  </footer>
);
