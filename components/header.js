import ReactSVG from "react-svg";
import Link from "next/link";

export default () => (
  <header className="mx-auto container px-6 py-4">
    <div className="flex items-center h-10">
      <Link href="/">
        <a className="mr-8 block flex-shrink-0">
          <ReactSVG src="/static/logo.svg" />
        </a>
      </Link>
    </div>
  </header>
)
