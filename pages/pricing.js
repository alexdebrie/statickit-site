import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import OpenGraph from '../components/open_graph';
import '../styles/main.css';

function PricingPage() {
  const title = 'Pricing';
  const description = 'Free to get started. Fair and simple pricing.';

  return (
    <div className="font-sans antialiased text-gray-900">
      <main>
        <Head>
          <link rel="canonical" href="https://statickit.com/pricing" />
          <meta
            property="description"
            content={description}
            key="description"
          />
        </Head>

        <OpenGraph title={title} description={description} path="/pricing" />

        <Header pageTitle={title} />

        <div className="mx-auto px-6 pt-16 container">
          <div className="pb-16 md:pt-12 md:pb-24">
            <h1 className="pb-2 text-4xl sm:text-5xl font-semibold leading-tight tracking-snug text-center">Pricing</h1>
            <p className="text-lg sm:text-xl text-gray-700 text-center">Get started for free. No credit card required.</p>
          </div>

          <div className="pb-16">
            <div className="w-full overflow-x-scroll sm:overflow-visible">
              <table className="mb-24 w-full sm:max-w-5xl mx-auto">
                <thead>
                  <tr className="text-xs uppercase text-indigo-600">
                    <th></th>
                    <th></th>
                    <th className="whitespace-no-wrap">Personal</th>
                    <th className="whitespace-no-wrap">Single Site</th>
                  </tr>
                  <tr className="text-xl md:text-4xl tracking-snug border-b">
                    <th></th>
                    <th></th>
                    <th className="pb-3 font-semibold w-1/4 whitespace-no-wrap">$0<span className="text-sm md:text-base font-normal text-gray-700"> / mo</span></th>
                    <th className="pb-3 font-semibold w-1/4 whitespace-no-wrap">$20<span className="text-sm md:text-base font-normal text-gray-700"> / mo</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b w-1/5 md:w-1/3 bg-gray-100 border-r" rowSpan="3">
                      <h3 className="font-semibold text-base md:text-xl">Usage</h3>
                      <p className="text-sm text-gray-600 hidden md:block">Limits around types of use.</p>
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-4 py-1 pt-4 font-bold">Domains</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">∞</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">1</td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-4 py-1 pb-4 font-bold">Use</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">Personal only</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">Commercial</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b w-1/5 md:w-1/3 bg-gray-100 border-r" rowSpan="4">
                      <h3 className="font-semibold text-base md:text-xl">Forms</h3>
                      <p className="text-sm text-gray-600 hidden md:block">Gather submissions from your visitors.</p>
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-4 py-1 pt-4 font-bold">Endpoints</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">∞</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">∞</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-4 py-1 font-bold">Submissions</td>
                    <td className="px-2 py-1 text-center text-gray-700">100 / mo</td>
                    <td className="px-2 py-1 text-center text-gray-700">1,000 / mo</td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-4 py-1 pb-4 font-bold">Actions</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">∞</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">∞</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="p-3">
                      <a href="https://app.statickit.com/signup?plan=free" className="btn btn-sm block w-full text-center">Get Started</a>
                    </td>
                    <td className="p-3">
                      <a href="https://app.statickit.com/signup?plan=standard" className="btn btn-sm block w-full text-center">Get Started</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center">Need higher limits? <a href="mailto:support@statickit.com" className="font-bold text-indigo-700">Let&rsquo;s chat.</a></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PricingPage;
