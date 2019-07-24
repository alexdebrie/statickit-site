import CodeBlock from './code_block';

const code = `
import { useForm } from '@statickit/react';

function MyForm() {
  const [submit, submitting, succeeded, errors] = useForm('0858b1a135b0');

  if (succeeded) {
    return (
      <div>Thank you for signing up!</div>
    )
  }

  return (
    <form onSubmit={submit}>
      <input type="email" name="email" required />
      <button type="submit" disabled={submitting}>Notify me</button>
    </form>
  );
}
`;

export default () => (
  <CodeBlock className="language-jsx">{code.trim()}</CodeBlock>
);
