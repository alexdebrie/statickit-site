import Link from "next/link";
import Header from "../components/header";
import "../styles/main.css";

export default () => (
  <main className="antialiased">
    <Header />
    <div className="mx-auto pt-16 container">
      <div className="pb-16 sm:pb-32 flex flex-wrap">
        <div className="px-6 pb-16 sm:pt-12 sm:pb-0 w-full sm:w-1/2 xl:w-2/5">
          <div className="pb-2">
            <span className="text-sm bg-indigo-600 rounded-full px-3 py-1 text-white font-semibold">Introducing</span>
          </div>
          <h1 className="pb-6 text-5xl font-semibold leading-tight tracking-snug">Simple form hosting <br className="hidden sm:block xl:hidden"/>for static sites</h1>

          <p className="pb-6 text-lg text-gray-700">Architected for developer happiness. <br className="hidden sm:block"/>Launching in July 2019 🚀</p>

          <form id="opt-in-form" className="max-w-sm">
            <div className="pb-2 flex items-center">
              <input type="email" name="email" value="" className="input-field block w-full" placeholder="Your email address" required />
              <input type="submit" name="submit" className="btn" value="Notify me" disabled />
            </div>
            <div data-sk-error="email" className="font-bold text-red-600 text-sm"></div>
          </form>
        </div>
      </div>
    </div>
  </main>
);
