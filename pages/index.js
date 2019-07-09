import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import CodeBlock from '../components/code_block';
import { ValidationError, useForm } from '../components/statickit/react';
import '../styles/main.css';

function OptInForm() {
  const [submitting, succeeded, errors, submit] = useForm('0858b1a135b0');

  const errorFor = field => {
    return errors.find(error => {
      return error.field == field;
    });
  };

  if (succeeded) {
    return (
      <div className="pb-6 text-lg text-gray-700">
        Thank you for signing up!
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="max-w-sm">
      <div className="pb-2 flex items-center">
        <input
          type="email"
          name="email"
          className="input-field block w-full"
          placeholder="Your email address"
          required
        />
        <input
          type="submit"
          name="submit"
          className="btn"
          value="Notify me"
          disabled={submitting}
        />
      </div>
      <ValidationError
        field="email"
        prefix="Email"
        errors={errors}
        className="font-bold text-red-600 text-sm"
      />
    </form>
  );
}

export default () => {
  const sampleCode = `
import { ValidationError, useForm } from '@statickit/react';

function MyForm() {
  const [ submitting, succeeded, errors, submit ] = useForm('0858b1a135b0');

  if (succeeded) {
    return (
      <div>Thank you for signing up!</div>
    )
  }

  return (
    <form onSubmit={submit}>
      <input type="email" name="email" placeholder="me@example.com" required />
      <ValidationError field="email" prefix="Email" errors={errors} />
      <input type="submit" name="submit" value="Notify me" disabled={submitting} />
    </form>
  );
}
  `;

  return (
    <div className="antialiased">
      <main>
        <Head>
          <meta
            property="og:title"
            content="Simple form hosting for static sites"
          />
          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content="Architected for developer happiness. Coming July 2019."
          />
          <meta
            property="og:description"
            content="Architected for developer happiness. Coming July 2019."
          />
          <link rel="canonical" href="https://www.statickit.com/" />
          <meta property="og:url" content="https://www.statickit.com/" />
          <meta property="og:site_name" content="StaticKit" />
          <meta
            property="og:image"
            content="https://www.statickit.com/static/logo-300.png"
          />
        </Head>
        <Header pageTitle="Simple form hosting for static sites" />
        <div className="mx-auto pt-16 container">
          <div className="pb-16 sm:pb-32 flex flex-wrap">
            <div className="px-6 pb-16 sm:pt-12 sm:pb-0 w-full sm:w-1/2 xl:w-2/5">
              <div className="pb-2">
                <span className="text-sm bg-indigo-600 rounded-full px-3 py-1 text-white font-semibold">
                  Introducing
                </span>
              </div>
              <h1 className="pb-6 text-5xl font-semibold leading-tight tracking-snug">
                Simple form hosting <br className="hidden sm:block xl:hidden" />
                for static sites
              </h1>

              <p className="pb-6 text-lg text-gray-700">
                Architected for developer happiness.{' '}
                <br className="hidden sm:block" />
                Launching in July 2019 🚀
              </p>

              <OptInForm />
            </div>

            <div className="px-6 w-full sm:w-1/2 xl:w-3/5">
              <div className="mb-2 p-4 w-full rounded-lg text-sm leading-relaxed overflow-auto bg-code">
                <CodeBlock className="language-jsx">
                  {sampleCode.trim()}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
