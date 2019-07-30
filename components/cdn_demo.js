import CodeBlock from './code_block';

const code = `
<form id="my-form">
  <label for="email">Email</label>
  <input type="email" name="email" value="" required />
  <button type="submit">Notify Me</button>
  <div data-sk-error="email"></div>
</form>

<script>
  window.sk=window.sk||function(){(sk.q=sk.q||[]).push(arguments)};
  sk('form', '#my-form', { id: '0858b1a135b0' });
</script>

<script defer src="https://js.statickit.com/statickit.js"></script>
`;

export default () => (
  <CodeBlock className="language-markup">{code.trim()}</CodeBlock>
);
