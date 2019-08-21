import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-diff';
import '../styles/dracula.css';

export default props => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre className="bg-gray-800 rounded-lg px-4 py-3 overflow-auto">
      <code {...props}>{props.children}</code>
    </pre>
  );
};
