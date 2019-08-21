import Head from 'next/head';

export default props => (
  <Head>
    <link rel="canonical" href={'https://statickit.com' + props.path} />
    <meta
      property="description"
      content={props.description}
      key="description"
    />
    <meta property="og:type" content="website" key="og:type" />
    <meta property="og:title" content={props.title} key="og:title" />
    <meta property="og:locale" content="en_US" key="og:locale" />
    <meta
      property="og:description"
      content={props.description}
      key="og:description"
    />
    <meta
      property="og:url"
      content={'https://statickit.com' + props.path}
      key="og:url"
    />
    <meta property="og:site_name" content="StaticKit" key="og:site_name" />
    <meta
      property="og:image"
      content="https://statickit.com/static/logo-300.png"
      key="og:image"
    />
    <meta property="og:image:width" content="300" key="og:image:width" />
    <meta property="og:image:height" content="300" key="og:image:width" />
  </Head>
);
