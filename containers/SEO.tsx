import { NextPage } from 'next';
import Head from 'next/head';
import activePage from 'utils/activePage';

import metaImage from 'assets/images/default-meta-image.png';

interface ISeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const defaultTitle = 'Yusuf Bozacı';
const defaultDescription =
  "Hello, I'm Yusuf! A front-developer that develops projects by prioritizing quality, clean coding and develops in accordance with accepted standards.";
const defaultImage = metaImage.src;

const SEO: NextPage<ISeoProps> = ({ title, description = defaultDescription, image }) => {
  const titleTemplate = activePage('') ? defaultTitle : `${title} - ${defaultTitle}`;

  const seo = {
    title: titleTemplate,
    description: description || defaultDescription,
    image: image || defaultImage,
  };

  return (
    <>
      <Head>
        {title && <title>{titleTemplate}</title>}
        <meta name="description" content={seo.description} />

        <meta name="og:title" content={seo.title} />
        <meta name="og:description" content={seo.description} />
        <meta name="og:site_name" content={seo.title} />
        <meta name="og:image" content={seo.image} />
        <meta name="og:type" content="website" />

        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:creator" content="@yusufbozaci_" />
        <meta name="twitter:image" content={seo.image} />
      </Head>
    </>
  );
};

export default SEO;
