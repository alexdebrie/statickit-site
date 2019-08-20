import React, { useEffect } from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { loadFathom, trackPageView } from '../components/analytics';

Router.events.on('routeChangeComplete', url => {
  trackPageView();
});

Router.events.on('routeChangeError', (err, url) => {
  console.error('Route change error', err, url);
});

function Layout(props) {
  const { children } = props;

  useEffect(() => {
    loadFathom();
  });

  return <div className="font-sans antialiased text-gray-900">{children}</div>;
}

class AppWithLayout extends App {
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

export default AppWithLayout;
