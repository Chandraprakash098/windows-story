import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "HighTech Window Blinds | Premium Window Covering Solutions",
  description: "Premium quality window blinds for modern homes and offices across India. Custom solutions with perfect light control and UV protection.",
  keywords: "window blinds, roller blinds, vertical blinds, wooden blinds, home decor, office blinds"
};

export default SEO;