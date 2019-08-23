import Link from 'next/link';

const levelLogo = `
<svg width="30px" height="18px" viewBox="0 0 30 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#000000">
            <path d="M7,0 L23,0 C24.1045695,-2.02906125e-16 25,0.8954305 25,2 C25,3.1045695 24.1045695,4 23,4 L7,4 C5.8954305,4 5,3.1045695 5,2 C5,0.8954305 5.8954305,2.02906125e-16 7,0 Z M12,7 L28,7 C29.1045695,7 30,7.8954305 30,9 C30,10.1045695 29.1045695,11 28,11 L12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 Z M2,14 L18,14 C19.1045695,14 20,14.8954305 20,16 C20,17.1045695 19.1045695,18 18,18 L2,18 C0.8954305,18 1.3527075e-16,17.1045695 0,16 C-1.3527075e-16,14.8954305 0.8954305,14 2,14 Z"></path>
        </g>
    </g>
</svg>
`;

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

        <a href="mailto:support@statickit.com" className="px-3">
          Support
        </a>
      </div>

      <div className="px-3 flex items-center">
        <div className="flex-grow text-sm text-gray-600">
          <span className="mr-5">&copy; Level Technologies, LLC</span>
        </div>
        <div>
          <span dangerouslySetInnerHTML={{ __html: levelLogo }} />
        </div>
      </div>
    </div>
  </footer>
);
