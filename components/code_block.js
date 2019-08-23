import useHighlighter from './use_highlighter';

export default props => {
  const codeRef = useHighlighter(null);

  return (
    <pre className="bg-gray-800 rounded-lg px-4 py-3 overflow-auto">
      <code ref={codeRef} {...props}>
        {props.children}
      </code>
    </pre>
  );
};
