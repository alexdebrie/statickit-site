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

class AppWithLayout extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="font-sans antialiased text-gray-900">
          <Component {...pageProps} />
        </div>
        <Analytics />
      </Container>
    );
  }
}

export default AppWithLayout;
