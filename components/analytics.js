function loadFathom() {
  if (disableAnalytics()) return;
  if (window.fathom) return;

  safelyInitializeFathom();

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdn.usefathom.com/tracker.js';
  script.id = 'fathom-script';
  document.body.appendChild(script);

  script.onload = () => {
    window.fathom('set', 'siteId', 'RETLQDNO');
    trackPageView();
  };
}

function trackPageView() {
  if (disableAnalytics()) return;

  try {
    safelyInitializeFathom();
    window.fathom('trackPageview');
  } catch (e) {
    // swallow the error
    console.error(e);
  }
}

function safelyInitializeFathom() {
  if (disableAnalytics()) return;

  window.fathom =
    window.fathom ||
    function() {
      (fathom.q = fathom.q || []).push(arguments);
    };
}

function disableAnalytics() {
  return process.env.ENABLE_ANALYTICS !== '1';
}

export { loadFathom, trackPageView };
