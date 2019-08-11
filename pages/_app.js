import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { Script as Analytics, trackPageView } from '../components/analytics';

Router.events.on('routeChangeComplete', url => {
  trackPageView();
});

Router.events.on('routeChangeError', (err, url) => {
  console.error('Route change error', err, url);
});

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div className="font-sans antialiased text-gray-900">{children}</div>
      <Analytics />
    </div>
  );
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
