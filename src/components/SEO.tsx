import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = "AnyFlow - Smart Contract Deployment Made Simple",
  description = "Deploy smart contracts across multiple blockchains with ease. AnyFlow enables 3-click deployments, automated security checks, and seamless integration with your development workflow.",
  image = "/og-image.png",
  url = "https://anyflow.pro",
  type = "website",
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AnyFlow",
    description,
    applicationCategory: "DevelopmentTool",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords: [
      "smart contracts",
      "blockchain",
      "web3",
      "deployment",
      "ethereum",
      "polygon",
      "multichain",
      "developer tools",
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AnyFlow" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@anyflow_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="application-name" content="AnyFlow" />
      <meta name="apple-mobile-web-app-title" content="AnyFlow" />
      <meta name="theme-color" content="#1A202C" />
      <meta name="keywords" content="smart contracts, blockchain, web3, deployment, ethereum, polygon, multichain, developer tools" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}; 