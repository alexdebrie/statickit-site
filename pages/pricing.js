import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import OpenGraph from '../components/open_graph';
import '../styles/main.css';

function PricingPage() {
  const title = 'Pricing';
  const description = 'Simple, honest pricing. Free for personal use.';

  const tiers = {
    individual: {
      slug: 'individual',
      name: 'Individual',
      price: '$0',
      usage: 'Personal Use *',
      domains: '∞',
      endpoints: '∞',
      submissions: '∞'
    },
    singleSite: {
      slug: 'single',
      name: 'Single Site',
      price: '$20',
      usage: 'Business',
      domains: '1',
      endpoints: '∞',
      submissions: '10,000 / mo'
    },
    multiSite: {
      slug: 'multi',
      name: 'Multi Site',
      price: '$60',
      usage: 'Business',
      domains: '∞',
      endpoints: '∞',
      submissions: '20,000 / mo'
    }
  };

  return (
    <div>
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

        <div className="mx-auto px-6 pt-12 container">
          <div className="pt-6 md:pt-10 pb-12 md:pb-16">
            <h1 className="pb-2 text-4xl sm:text-5xl font-semibold leading-tight tracking-snug text-center">
              Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 text-center">
              Free for personal use, affordable for business.
            </p>
          </div>

          <div className="pb-16">
            <div className="w-full hidden sm:block">
              <table className="mb-16 w-full sm:max-w-2xl mx-auto">
                <thead>
                  <tr className="text-xs uppercase text-indigo-600">
                    <th></th>
                    <th className="whitespace-no-wrap">
                      {tiers.individual.name}
                    </th>
                    <th className="whitespace-no-wrap">
                      {tiers.singleSite.name}
                    </th>
                    <th className="whitespace-no-wrap">
                      {tiers.multiSite.name}
                    </th>
                  </tr>
                  <tr className="text-2xl md:text-4xl tracking-snug">
                    <th className="border-b"></th>
                    <th className="pb-3 font-semibold w-1/4 whitespace-no-wrap border-b">
                      {tiers.individual.price}
                      <span className="text-base font-normal text-gray-700">
                        {' '}
                        / mo
                      </span>
                    </th>
                    <th className="pb-3 font-semibold w-1/4 whitespace-no-wrap border-b">
                      {tiers.singleSite.price}
                      <span className="text-base font-normal text-gray-700">
                        {' '}
                        / mo
                      </span>
                    </th>
                    <th className="pb-3 font-semibold w-1/4 whitespace-no-wrap border-b">
                      {tiers.multiSite.price}
                      <span className="text-base font-normal text-gray-700">
                        {' '}
                        / mo
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Usage</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.individual.usage}
                    </td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.singleSite.usage}
                    </td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.multiSite.usage}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Domains</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.individual.domains}
                    </td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.singleSite.domains}
                    </td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.multiSite.domains}
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Endpoints</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.individual.endpoints}
                    </td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.singleSite.endpoints}
                    </td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.multiSite.endpoints}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Submissions</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.individual.submissions}
                    </td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.singleSite.submissions}
                    </td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.multiSite.submissions}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="p-3">
                      <a
                        href="https://app.statickit.com/signup?plan=individual"
                        className="btn btn-sm block w-full text-center"
                      >
                        Sign up
                      </a>
                    </td>
                    <td className="p-3">
                      <a
                        href="https://app.statickit.com/signup?plan=single"
                        className="btn btn-sm block w-full text-center"
                      >
                        Sign up
                      </a>
                    </td>
                    <td className="p-3">
                      <a
                        href="https://app.statickit.com/signup?plan=multi"
                        className="btn btn-sm block w-full text-center"
                      >
                        Sign up
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full sm:hidden">
              <table className="mb-16 w-full">
                <thead>
                  <tr className="text-xs uppercase text-indigo-600">
                    <th></th>
                    <th className="whitespace-no-wrap">
                      {tiers.individual.name}
                    </th>
                  </tr>
                  <tr className="text-2xl tracking-snug">
                    <th className="border-b"></th>
                    <th className="pb-3 font-semibold whitespace-no-wrap border-b">
                      {tiers.individual.price}
                      <span className="text-base font-normal text-gray-700">
                        {' '}
                        / mo
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Usage</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.individual.usage}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Domains</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.individual.domains}
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Endpoints</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.individual.endpoints}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Submissions</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.individual.submissions}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="p-3">
                      <a
                        href="https://app.statickit.com/signup?plan=individual"
                        className="btn btn-sm block w-full text-center"
                      >
                        Sign up
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="mb-16 w-full">
                <thead>
                  <tr className="text-xs uppercase text-indigo-600">
                    <th></th>
                    <th className="whitespace-no-wrap">
                      {tiers.singleSite.name}
                    </th>
                  </tr>
                  <tr className="text-2xl tracking-snug">
                    <th className="border-b"></th>
                    <th className="pb-3 font-semibold whitespace-no-wrap border-b">
                      {tiers.singleSite.price}
                      <span className="text-base font-normal text-gray-700">
                        {' '}
                        / mo
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Usage</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.singleSite.usage}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Domains</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.singleSite.domains}
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Endpoints</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.singleSite.endpoints}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Submissions</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.singleSite.submissions}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="p-3">
                      <a
                        href="https://app.statickit.com/signup?plan=single"
                        className="btn btn-sm block w-full text-center"
                      >
                        Sign up
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="mb-16 w-full">
                <thead>
                  <tr className="text-xs uppercase text-indigo-600">
                    <th></th>
                    <th className="whitespace-no-wrap">
                      {tiers.multiSite.name}
                    </th>
                  </tr>
                  <tr className="text-2xl tracking-snug">
                    <th className="border-b"></th>
                    <th className="pb-3 font-semibold whitespace-no-wrap border-b">
                      {tiers.multiSite.price}
                      <span className="text-base font-normal text-gray-700">
                        {' '}
                        / mo
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Usage</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.multiSite.usage}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Domains</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.multiSite.domains}
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="px-2 py-1 pt-4 font-bold">Endpoints</td>
                    <td className="px-2 py-1 pt-4 text-center text-gray-700">
                      {tiers.multiSite.endpoints}
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="px-2 py-1 pb-4 font-bold">Submissions</td>
                    <td className="px-2 py-1 pb-4 text-center text-gray-700">
                      {tiers.multiSite.submissions}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="p-3">
                      <a
                        href="https://app.statickit.com/signup?plan=multi"
                        className="btn btn-sm block w-full text-center"
                      >
                        Sign up
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pb-16 max-w-2xl mx-auto">
              <h3 className="pb-2 text-lg font-semibold">* How do you define personal use?</h3>
              <p className="text-gray-600">&ldquo;Personal use&rdquo; includes personal websites and development environments. If your personal website is also where you conduct your business &mdash; for example, if you are a professional blogger or a freelancer &mdash; that would fall under business use.</p>
            </div>

            <p className="text-center">
              Need higher limits?{' '}
              <a
                href="mailto:support@statickit.com"
                className="font-bold text-indigo-700"
              >
                Let&rsquo;s chat.
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PricingPage;
