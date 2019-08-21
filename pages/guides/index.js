import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import OpenGraph from '../../components/open_graph';
import '../../styles/main.css';

function GuidesPage() {
  const title = 'Guides';
  const description = 'Tutorials on how to use StaticKit.';
  const guides = [
    {
      title: 'Building a Landing Page with StaticKit and Next.js',
      description:
        "In this guide, you'll learn how to create a simple landing page to gather email addresses using StaticKit and Next.js",
      path: '/guides/next-landing-page'
    }
  ];

  const items = guides.map(props => {
    return (
      <li key={props.path} className="py-16 border-t sm:text-center">
        <Link href={props.path}>
          <a className="block">
            <div className="max-w-lg mx-auto">
              <h2 className="pb-1 text-xl font-semibold text-indigo-600">
                {props.title}
              </h2>
              <p className="text-gray-600">{props.description}</p>
            </div>
          </a>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <main>
        <OpenGraph title={title} description={description} path="/guides" />
        <Header pageTitle={title} />

        <div className="mx-auto px-6 pt-12 container">
          <div className="pt-6 md:pt-10 pb-12 md:pb-16">
            <h1 className="pb-2 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-center">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-center">
              {description}
            </p>
          </div>

          <div>
            <ul>{items}</ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default GuidesPage;
