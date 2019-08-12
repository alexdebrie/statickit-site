function loadFathom() {
  if (window.fathom) return;

  window.fathom =
    window.fathom ||
    function() {
      (fathom.q = fathom.q || []).push(arguments);
    };

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
    window.fathom('trackPageview');
  } catch (e) {
    // swallow the error
    console.error(e);
  }
}

export { loadFathom, trackPageView };
