function loadFathom() {
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
  try {
    safelyInitializeFathom();
    window.fathom('trackPageview');
  } catch (e) {
    // swallow the error
    console.error(e);
  }
}

function safelyInitializeFathom() {
  window.fathom =
    window.fathom ||
    function() {
      (fathom.q = fathom.q || []).push(arguments);
    };
}

export { loadFathom, trackPageView };
