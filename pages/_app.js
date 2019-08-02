import React, { useEffect } from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { Script as Analytics, trackPageView } from '../components/analytics';

function Layout(props) {
  useEffect(() => {
    const handleRouteChange = url => {
      trackPageView();
    };

    Router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div>
      <div className="font-sans antialiased text-gray-900">{props.children}</div>
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
