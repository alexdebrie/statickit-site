import Header from '../components/header';
import Footer from '../components/footer';
import OpenGraph from '../components/open_graph';
import { ValidationError, useForm } from '@statickit/react';

function ContactForm() {
  const [state, submit] = useForm('6d92d93d9b3f');

  if (state.succeeded) {
    return (
      <div className="text-center">
        <p>
          <span style={{ fontSize: '80px' }}>👍</span>
        </p>
        <p className="font-bold text-gray-900 text-xl">
          Thanks for getting in touch!
        </p>
        <p className="text-gray-700 text-lg">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <div className="pb-6">
        <label htmlFor="email" className="pb-1 block font-bold">
          What's your email address?
        </label>
        <input
          type="email"
          name="email"
          className="input-field w-full"
          placeholder="me@example.com"
          required
        />
        <ValidationError
          field="email"
          prefix="Email"
          errors={state.errors}
          className="text-red-600 font-bold"
        />
      </div>

      <div className="pb-4">
        <label htmlFor="message" className="pb-1 block font-bold">
          How can we help?
        </label>
        <textarea
          name="message"
          className="input-field leading-normal w-full h-32 resize-none"
          required
        ></textarea>
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="text-red-600 font-bold"
        />
      </div>

      <button type="submit" className="btn" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}

function SupportPage() {
  const title = 'Support';
  const description = 'Get in touch with support.';

  return (
    <div>
      <main>
        <OpenGraph title={title} description={description} path="/support" />
        <Header pageTitle={title} />

        <div className="mx-auto px-6 pt-12 container">
          <div className="pt-6 md:pt-10 pb-12 md:pb-16">
            <h1 className="pb-2 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-center">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-center">
              {description}
            </p>
          </div>
        </div>

        <div className="px-6 pb-24 max-w-lg mx-auto">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SupportPage;
