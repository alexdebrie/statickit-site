import CodeBlock from './code_block';

const code = `
import { ValidationError, useForm } from '@statickit/react';

function MyForm() {
  const [ submitting, succeeded, errors, submit ] = useForm('0858b1a135b0');

  if (succeeded) {
    return (
      <div>Thank you for signing up!</div>
    )
  }

  return (
    <form onSubmit={submit}>
      <input type="email" name="email" placeholder="me@example.com" required />
      <ValidationError field="email" prefix="Email" errors={errors} />
      <input type="submit" name="submit" value="Notify me" disabled={submitting} />
    </form>
  );
}
`;

export default () => (
  <CodeBlock className="language-jsx">{code.trim()}</CodeBlock>
);
