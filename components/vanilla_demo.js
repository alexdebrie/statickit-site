import CodeBlock from './code_block';

const js = `
// In the JavaScript bundle
import sk from '@statickit/standalone';

sk('form', '#my-form', {
  id: '0858b1a135b0',
  onSuccess: function(config) {
    var h = config.h;
    var form = config.form;
    var replacement = h("div", "Thank you for signing up!");
    form.parentNode.replaceChild(replacement, form);
  }
});
`;

const html = `
<form id="my-form">
  <input type="email" name="email" value="" required />
  <button type="submit">Notify Me</button>
  <div data-sk-error="email"></div>
</form>
`;

export default () => (
  <>
    <CodeBlock className="language-markup">{html.trim()}</CodeBlock>
    <br />
    <CodeBlock className="language-javascript">{js.trim()}</CodeBlock>
  </>
);
