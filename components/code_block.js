import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';

// This import is required to get JSX highlighting working properly:
// https://github.com/PrismJS/prism/issues/1116#issuecomment-291921678
import PrismJsx from 'prismjs/components/prism-jsx.min';

import '../styles/dracula.css';

export default props => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre>
      <code {...props}>{props.children}</code>
    </pre>
  );
};
